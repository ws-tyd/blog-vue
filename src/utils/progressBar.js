(
    function progressBar() {
        // 滚动条高度
        let navHead = null;
        let height = 0;
        window.onload = () => {
            height =  document.documentElement.scrollHeight - document.documentElement.clientHeight
            navHead = document.getElementById('navHead');
            // document.body.appendChild(span)
        }
        window.addEventListener('scroll', function () {
            const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            // 当前进度条进度 = 当前滚动条位置 / 滚动条高度
            // console.log(scrollTop , height)
            if (scrollTop > 100){
                navHead.style.background = '#1cd6ba'
            }else {
                navHead.style.background = 'transparent'
            }
            // scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
        })
    }
)
()
