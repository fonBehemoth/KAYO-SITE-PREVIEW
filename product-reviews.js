(() => {
  let sequence=0;
  const api=()=>window.KayoEngagement;
  function render(modal,product){
    const ui=api();if(!ui)return;modal.querySelector('.kayo-review-block')?.remove();
    const slug=product.slug||product.image?.replace('/','-');if(!slug)return;
    const block=ui.node('section','kayo-review-block'),heading=ui.node('h3','',ui.t('reviews'));block.setAttribute('aria-label',ui.t('reviews'));
    const summary=ui.node('div','kayo-review-summary'),toolbar=ui.node('div','kayo-review-toolbar'),sort=ui.node('select');sort.setAttribute('aria-label',ui.t('reviews'));
    for(const key of ['newest','highest','lowest']){const option=ui.node('option','',ui.t(key));option.value=key;sort.append(option)}
    toolbar.append(button(ui.t('writeReview'),()=>openForm(product),'kayo-action kayo-action--accent'),sort);
    const list=ui.node('div'),status=ui.node('p'),pages=ui.node('div','kayo-review-pages');status.setAttribute('role','status');status.setAttribute('aria-live','polite');
    block.append(heading,summary,toolbar,status,list,pages,ui.node('p','',ui.t('reviewNotice')));modal.querySelector('.product-modal-content').append(block);
    let page=1,requestNumber=0;
    async function load(){const request=++requestNumber;status.textContent='…';list.replaceChildren();pages.replaceChildren();
      try{const response=await fetch(`/products/${encodeURIComponent(slug)}/reviews?sort=${sort.value}&page=${page}`,{headers:{Accept:'application/json'},cache:'no-store'});if(!response.ok)throw Error();const data=await response.json();
        if(request!==requestNumber||!block.isConnected)return;
        if(!Number.isInteger(data.count)||!Array.isArray(data.reviews))throw Error();
        summary.replaceChildren();summary.append(ui.node('strong','',data.count&&Number.isFinite(data.average)?`${data.average.toFixed(1)} / 5`:ui.t('noRating')),ui.node('span','',`(${data.count})`));
        status.textContent=data.count?'':ui.t('noReviews');
        data.reviews.forEach(review=>{const item=ui.node('article','kayo-review-item'),rating=Math.max(1,Math.min(5,Number(review.rating)||1)),stars=ui.node('span','kayo-review-stars','★'.repeat(rating)+'☆'.repeat(5-rating));stars.setAttribute('aria-label',`${rating} / 5`);item.append(stars,ui.node('h4','',review.title),ui.node('small','',`${review.name} · ${review.date}`),ui.node('p','',review.body));list.append(item)});
        if(data.lastPage>1){const prev=button(ui.t('prev'),()=>{page--;load()}),next=button(ui.t('next'),()=>{page++;load()});prev.disabled=page<=1;next.disabled=page>=data.lastPage;pages.append(prev,ui.node('span','',`${page} / ${data.lastPage}`),next)}
      }catch{if(request===requestNumber&&block.isConnected){summary.replaceChildren();status.textContent=ui.t('loadFailed')}}
    }
    sort.addEventListener('change',()=>{page=1;load()});load();
  }
  function button(text,action,cls=''){const b=api().node('button',cls,text);b.type='button';b.addEventListener('click',action);return b}
  function openForm(product){const ui=api(),origin=document.activeElement,body=ui.dialog(ui.t('writeReview'),origin),form=ui.node('form'),rating=ui.node('fieldset','kayo-rating-options');rating.append(ui.node('legend','',ui.t('rating')));const group=++sequence;
    for(let score=1;score<=5;score++){const label=ui.node('label'),input=ui.node('input'),star=ui.node('span','','★');input.type='radio';input.name='rating';input.value=String(score);input.required=true;input.id=`kayo-rating-${group}-${score}`;input.setAttribute('aria-label',`${score} / 5`);label.append(input,star);rating.append(label)}
    form.append(rating);ui.input(form,'name',ui.t('name'),'text',80);ui.input(form,'email',ui.t('email'),'email',254);ui.input(form,'title',ui.t('reviewTitle'),'text',160);ui.input(form,'body',ui.t('reviewBody'),'textarea',4000).minLength=10;ui.check(form,ui.t('reviewConsent'));
    const slug=product.slug||product.image?.replace('/','-');ui.finishForm(form,ui.t('submitReview'),`/products/${encodeURIComponent(slug)}/reviews`,'pending');body.append(ui.node('p','',product.title),form);ui.policyLink(body);
  }
  window.KayoReviews={render};
  const modal=document.querySelector('.product-modal:not([hidden])');if(modal){const product=window.KayoCms?.products?.find(p=>p.slug===modal.dataset.productSlug);if(product)render(modal,product)}
})();
