document.addEventListener("DOMContentLoaded", function () { 
    // هاد الحدث بيشتغل لما الصفحة تتحمل بالكامل
    const loginForm = document.getElementById("loginForm"); 
    // هاد عشان نجيب الفورم اللي عندها id يساوي "loginForm"

    loginForm.addEventListener("submit", function (event) { 
        // هاد الحدث بيشتغل لما المستخدم يعمل submit للفورم
        event.preventDefault(); 
        // هاد عشان نمنع الصفحة من إعادة التحميل بعد الضغط على submit

        const email = document.getElementById("email").value; 
        // هاد عشان نجيب قيمة البريد الإلكتروني اللي أدخلها المستخدم
        const password = document.getElementById("password").value; 
        // هاد عشان نجيب قيمة كلمة المرور اللي أدخلها المستخدم

        if (email === "" || password === "") { 
            // هاد الشرط عشان نتأكد إذا البريد الإلكتروني أو كلمة المرور فاضية
            alert("يرجى إدخال البريد الإلكتروني وكلمة المرور!"); 
            // هاد عشان نعرض رسالة تنبيه إذا المستخدم ما أدخل بياناته
        } else {
            alert("تم تسجيل الدخول بنجاح!"); 
            // هاد عشان نعرض رسالة نجاح إذا المستخدم أدخل بياناته صح
        }
    });

    document.querySelector(".google-btn").addEventListener("click", function () { 
        // هاد الحدث بيشتغل لما المستخدم يضغط على زر جوجل
        alert("جارٍ تسجيل الدخول عبر Google..."); 
        // هاد عشان نعرض رسالة تفيد بأن تسجيل الدخول عبر جوجل قيد التحميل
    });

    document.querySelector(".facebook-btn").addEventListener("click", function () { 
        // هاد الحدث بيشتغل لما المستخدم يضغط على زر فيسبوك
        alert("جارٍ تسجيل الدخول عبر Facebook..."); 
        // هاد عشان نعرض رسالة تفيد بأن تسجيل الدخول عبر فيسبوك قيد التحميل
    });
});