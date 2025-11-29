// 简单的交互效果
document.addEventListener('DOMContentLoaded', function() {
    // 演示面板的字母切换动画
    const demoItems = document.querySelectorAll('.demo-item');
    let currentIndex = 2; // C 是默认激活的
    
    function rotateActive() {
        demoItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % demoItems.length;
        demoItems[currentIndex].classList.add('active');
    }
    
    // 每 2 秒切换一次激活的字母
    setInterval(rotateActive, 2000);
    
    // 平滑滚动
    document.querySelectorAll('nav a, a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // 滚动时的淡入效果
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察所有卡片
    document.querySelectorAll('.feature-card, .workflow-step, .advantage-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

