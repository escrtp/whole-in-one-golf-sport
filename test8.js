document.addEventListener("DOMContentLoaded", function () { 
    // هاد الحدث بيشتغل لما الصفحة تتحمل بالكامل
    const increaseTextSizeBtn = document.getElementById("increaseTextSize"); 
    // هاد عشان نجيب الزر اللي بيكبر النص
    const toggleDarkModeBtn = document.getElementById("toggleDarkMode"); 
    // هاد عشان نجيب الزر اللي بغير الوضع الليلي

    // ✅ تحميل الإعدادات المحفوظة
    if (localStorage.getItem("textSize") === "large") { 
        // هاد الشرط عشان نتأكد إذا حجم النص محفوظ كـ "كبير"
        document.body.style.fontSize = "1.5em"; 
        // هاد عشان نغير حجم النص لـ 1.5em
    } else if (localStorage.getItem("textSize") === "normal") { 
        // هاد الشرط عشان نتأكد إذا حجم النص محفوظ كـ "عادي"
        document.body.style.fontSize = "1em"; 
        // هاد عشان نغير حجم النص لـ 1em
    }

    if (localStorage.getItem("darkMode") === "enabled") { 
        // هاد الشرط عشان نتأكد إذا الوضع الليلي مفعل
        document.body.classList.add("dark-mode"); 
        // هاد عشان نضيف كلاس "dark-mode" للـ body
    }

    // ✅ تكبير النص عبر جميع الصفحات
    increaseTextSizeBtn.addEventListener("click", function () { 
        // هاد الحدث بيشتغل لما المستخدم يضغط على زر تكبير النص
        if (document.body.style.fontSize === "1.5em") { 
            // هاد الشرط عشان نتأكد إذا حجم النص حالياً 1.5em
            document.body.style.fontSize = "1em"; 
            // هاد عشان نرجع حجم النص لـ 1em
            localStorage.setItem("textSize", "normal"); 
            // هاد عشان نحفظ الإعداد كـ "عادي"
        } else {
            document.body.style.fontSize = "1.5em"; 
            // هاد عشان نكبر حجم النص لـ 1.5em
            localStorage.setItem("textSize", "large"); 
            // هاد عشان نحفظ الإعداد كـ "كبير"
        }
    });

    // ✅ تفعيل الوضع الليلي عبر جميع الصفحات
    toggleDarkModeBtn.addEventListener("click", function () { 
        // هاد الحدث بيشتغل لما المستخدم يضغط على زر الوضع الليلي
        document.body.classList.toggle("dark-mode"); 
        // هاد عشان نضيف أو نزيل كلاس "dark-mode" من الـ body

        if (document.body.classList.contains("dark-mode")) { 
            // هاد الشرط عشان نتأكد إذا الوضع الليلي مفعل
            localStorage.setItem("darkMode", "enabled"); 
            // هاد عشان نحفظ الإعداد كـ "مفعل"
        } else {
            localStorage.setItem("darkMode", "disabled"); 
            // هاد عشان نحفظ الإعداد كـ "معطل"
        }
    });
});