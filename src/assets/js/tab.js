(() => {

    const $doc = document;
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');
    const ACTIVE_CLASS = 'is-active';
    const navLen = $nav.length;

    // 初期化(一個目だけ黒く)
    const init = () =>{
        $content[0].style.display = 'block';
    };
    init();

    // クリックしたらおこるイベント
    const handleClick = (e) => {
        e.preventDefault();

        // クリックされたnavとそのdataを取得
        const $this = e.target;
        const targetVal = $this.dataset.nav;

        // 対象外のnav, content全て一旦リセットする(一旦全てdisplay: none;にする)
        for(i=0; i < navLen; ++i){
            $content[i].style.display = 'none';
            $nav[i].classList.remove(ACTIVE_CLASS);
        }

        // 対象のコンテンツをアクティブに
        $tab.querySelectorAll('[data-content ="' + targetVal  + '"]')[0].style.display = 'block';
        $nav[targetVal].classList.add(ACTIVE_CLASS);
    }

   
    // 全nav要素に対して関数適用
    for(i = 0; i < navLen; ++i){
        $nav[i].addEventListener('click', (e) => handleClick(e));
    };


// console.log($content)
})();