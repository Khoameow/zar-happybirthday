const music = document.getElementById('bgMusic');
let hasMusicStarted = false; // Biến kiểm tra để không bật lại nhiều lần

// Hàm bật nhạc
function startMusic() {
    // Nếu nhạc chưa bật thì mới bật
    if (!hasMusicStarted) {
        music.play().then(() => {
            hasMusicStarted = true; // Đánh dấu đã bật thành công
            console.log("Nhạc đã phát do người dùng di chuyển/tương tác!");
            
            // Sau khi nhạc đã chạy, gỡ bỏ các "bẫy" sự kiện để đỡ nặng máy
            removeUserInteractions();
        }).catch(error => {
            // Lỗi này thường do trình duyệt chưa cho phép, chờ tương tác tiếp theo
            console.log("Chờ thêm tương tác từ người dùng...");
        });
    }
}

// Hàm dọn dẹp các sự kiện lắng nghe
function removeUserInteractions() {
    document.removeEventListener('click', startMusic);
    document.removeEventListener('mousemove', startMusic); // Di chuột
    document.removeEventListener('touchstart', startMusic); // Chạm màn hình
    document.removeEventListener('scroll', startMusic);     // Cuộn trang
    document.removeEventListener('keydown', startMusic);    // Gõ phím
}

// --- TẠO CÁC "BẪY" SỰ KIỆN ---
// Ngay khi người dùng làm bất cứ hành động gì dưới đây, nhạc sẽ bật ngay
document.addEventListener('click', startMusic);
document.addEventListener('mousemove', startMusic);
document.addEventListener('touchstart', startMusic);
document.addEventListener('scroll', startMusic);
document.addEventListener('keydown', startMusic);


// --- PHẦN NỘI DUNG QUÀ & HIỆU ỨNG ---
const gifts = {
    1: {
        title: "🎁 ကျွန်တော့် ကတိစကား", 
        message: "မင်းဘေးနားမှာ အမြဲရှိနေမယ်၊ ဂရုစိုက်မယ်၊ နေ့တိုင်းပျော်ရွှင်အောင် လုပ်ပေးမယ်လို့ ကတိပေးပါတယ်! 💕"
    },
    2: {
        title: "🧸 အမှတ်ရစရာ အခိုက်အတန့်များ", 
        message: "မင်းနဲ့အတူရှိနေတဲ့ အချိန်တိုင်းဟာ ကိုယ့်အတွက် အကောင်းဆုံးအမှတ်တရတွေပါပဲ။ ကိုယ့်ဘဝထဲ ဝင်လာပေးလို့ ကျေးဇူးတင်ပါတယ်! 🌟"
    },
    3: {
        title: "🌹 အဆုံးမဲ့ အချစ်", 
        message: "မင်းအပေါ်ထားတဲ့ ကိုယ့်ရဲ့အချစ်က ပင်လယ်သမုဒ္ဒရာလို နက်ရှိုင်းပြီး ကောင်းကင်လို ကျယ်ပြန့်ပါတယ်။ မင်းတစ်ယောက်တည်းပါပဲ! 💖"
    },
    4: {
        title: "💝 မွေးနေ့ဆုတောင်း", 
        message: "မင်းအမြဲတမ်း ပျော်ရွှင်၊ ကျန်းမာ၊ ချမ်းမြေ့ပါစေလို့ ကိုယ်ဆုတောင်းပေးပါတယ်။ မင်းအတွက် အမြဲတမ်း ဒီမှာရှိနေမှာပါ! 🎂✨"
    }
};

// Mở hộp quà
function openGift(giftNumber) {
    // Đảm bảo nhạc bật nếu người dùng click thẳng vào hộp quà mà chưa di chuyển chuột trước đó
    startMusic();

    const gift = gifts[giftNumber];
    document.getElementById('modalTitle').textContent = gift.title;
    document.getElementById('modalMessage').textContent = gift.message;
    document.getElementById('giftModal').style.display = 'flex';
    createConfetti();
}

function closeModal() {
    document.getElementById('giftModal').style.display = 'none';
}

function showLove() {
    startMusic(); 
    createHearts();
    createConfetti();
    
    Swal.fire({
        // Tiêu đề
        title: '<span class="love-title">💖 ချစ်သူ့မွေးနေ့ မင်္ဂလာပါ! 💖</span>',
        
        // Nội dung (Đã tối ưu font chữ cho Mobile)
        html: `
            <div class="love-content">
                <b>ချစ်ရတဲ့ မင်းလေးရေ...</b><br>
                <span class="sub-text">(Em yêu à...)</span><br><br>
                မင်းက ကိုယ့်ကမ္ဘာကြီးပါပဲ<br>
                ပျော်ရွှင်ခြင်းတွေ အများကြီးပိုင်ဆိုင်ပါစေ!<br>
                <span class="love-highlight">💕 ကိုယ်မင်းကို အရမ်းချစ်တယ်! 💕</span>
            </div>
        `,

        // Ảnh động (Đặt kích thước vừa phải)
        imageUrl: 'https://i.pinimg.com/originals/f6/a5/f7/f6a5f7ddff1f05cbcc560256b9f98c2e.gif', 
        imageWidth: 120,  // Giảm xuống 120 để vừa điện thoại
        imageHeight: 120,
        imageAlt: 'Cute Love Gif',
        
        // Nút bấm
        confirmButtonText: '😘 ချစ်တယ် (Love You) 😘',
        confirmButtonColor: '#ff4d79',
        
        background: 'linear-gradient(#fff0f5, #ffe6f2)', 
        padding: '1em', // Giảm padding để tiết kiệm diện tích trên mobile
        
        // Hiệu ứng nền
        backdrop: `
            rgba(0,0,123,0.4)
            url("https://media.giphy.com/media/LpDmM2wSt6Hm5fKJVa/giphy.gif")
            left top
            no-repeat
        `,
        
        showClass: { popup: 'animate__animated animate__zoomInDown' },
        hideClass: { popup: 'animate__animated animate__zoomOutUp' },
        
        customClass: {
            popup: 'custom-love-popup',
            confirmButton: 'custom-love-btn'
        }
    });
}

function createHearts() {
    const container = document.getElementById('heartsContainer');
    const hearts = ['❤️', '💕', '💖', '💗', '💝', '💓'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
            container.appendChild(heart);
            setTimeout(() => heart.remove(), 4000);
        }, i * 200);
    }
}

function createConfetti() {
    const colors = ['#f093fb', '#f5576c', '#4facfe', '#00f2fe', '#ffd89b', '#19547b'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 3000);
        }, i * 50);
    }
}

window.addEventListener('load', () => {
    setTimeout(createHearts, 1000);
});