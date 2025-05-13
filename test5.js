// تأثير ظهور الصور بشكل سلس عند التمرير
document.addEventListener("DOMContentLoaded", function() { 
    // هاد الحدث بيشتغل لما الصفحة تتحمل بالكامل
    const boxes = document.querySelectorAll(".activity-box"); 
    // هاد عشان نجمع كل العناصر اللي عندها كلاس "activity-box" في مصفوفة

    const observer = new IntersectionObserver((entries) => { 
        // هاد عشان ننشئ "Observer" عشان نتابع ظهور العناصر
        entries.forEach(entry => { 
            // هاد عشان نمرر على كل العناصر اللي بتدخل في الشاشة
            if (entry.isIntersecting) { 
                // هاد الشرط عشان نتأكد إذا العنصر ظاهر في الشاشة
                entry.target.style.opacity = "1"; 
                // هاد عشان نجعل العنصر يظهر بشكل سلس
                entry.target.style.transform = "translateY(0)"; 
                // هاد عشان نحرك العنصر لموضعه الطبيعي
            }
        });
    }, { threshold: 0.3 }); 
    // هاد عشان نحدد نسبة الظهور المطلوبة (30% من العنصر)

    boxes.forEach(box => { 
        // هاد عشان نمرر على كل العناصر في المصفوفة
        box.style.opacity = "0"; 
        // هاد عشان نخفي العنصر في البداية
        box.style.transform = "translateY(30px)"; 
        // هاد عشان نحرك العنصر لتحت بمقدار 30px
        box.style.transition = "all 0.5s ease-in-out"; 
        // هاد عشان نضيف تأثير انتقال سلس
        observer.observe(box); 
        // هاد عشان نبدأ بمراقبة العنصر
    });
});