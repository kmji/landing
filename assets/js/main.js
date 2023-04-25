$(function(){

    $('body').mousemove(function(e){
        x=e.clientX;
        y=e.clientY;
        gsap.to('.cursor',{
            x:x,
            y:y
        })

    })
    
    function projectList(sortData){
        fetch('./assets/data/project.json')
        .then(res=>res.json())
        .then(json=>{
            allData=json.items;
    
            resultData = allData.filter(function(data){
                return data.sort.indexOf(sortData) >= 0;
            })
            let html='';
            let randNum = 1;

            resultData.forEach(element => {
                html+=`<li class="pj-item">
                            <a href="${element.link}" target="_blank">
                                <div class="img">
                                    <img src="${element.thumb}" alt="${element.title}">
                                </div>
                                <h3 class="title">${element.title}</h3>
                                <p class="sub">${element.sub}</p>
                            </a>
                        </li>`;
                        randNum++;
            });
            $('#projectList').html(html);
        })
    }
    projectList('all');


    $(document).on('mouseenter','.sc-project .pj-item',function(){
        $(this).siblings().addClass('no-hover');
    })
    $(document).on('mouseleave','.sc-project .pj-item',function(){
        $(this).siblings().removeClass('no-hover');
    })
  
    $('.btn-wrap .btn').click(function(e){
        e.preventDefault();
        target = $(this).find('a').data('target');
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        projectList(target);
    })

    $('.bar-wrap').click(function(){
        $(this).toggleClass('active');
        $('.m-list').toggleClass('active');
    })
    $('.m-item').click(function(){
        $('.bar-wrap').removeClass('active');
        $('.m-list').removeClass('active');
    })
    
})