// // --- PHẦN XỬ LÝ NHẠC (BẮT ĐẦU KHI CHẠM VÀO MÀN HÌNH) ---

// const music = document.getElementById('bgMusic');
// const musicIcon = document.getElementById('musicIcon');
// const musicBtn = document.querySelector('.music-control');
// let isPlaying = false;// Nội dung các món quà (Translated to Burmese)
// const gifts = {
//     1: {
//         // Lời Hứa Của Anh -> ကျွန်တော့် ကတိစကား (My Promise)
//         title: "🎁 ကျွန်တော့် ကတိစကား", 
//         // Anh hứa sẽ luôn ở bên em, chăm sóc em và làm em cười mỗi ngày! 💕
//         message: "မင်းဘေးနားမှာ အမြဲရှိနေမယ်၊ ဂရုစိုက်မယ်၊ နေ့တိုင်းပျော်ရွှင်အောင် လုပ်ပေးမယ်လို့ ကတိပေးပါတယ်! 💕"
//     },
//     2: {
//         // Kỷ Niệm Đáng Nhớ -> အမှတ်ရစရာ အခိုက်အတန့်များ (Memorable Moments)
//         title: "🧸 အမှတ်ရစရာ အခိုက်အတန့်များ", 
//         // Mỗi khoảnh khắc bên em đều là kỷ niệm tuyệt vời nhất của anh. Cảm ơn em vì đã xuất hiện trong cuộc đời anh! 🌟
//         message: "မင်းနဲ့အတူရှိနေတဲ့ အချိန်တိုင်းဟာ ကိုယ့်အတွက် အကောင်းဆုံးအမှတ်တရတွေပါပဲ။ ကိုယ့်ဘဝထဲ ဝင်လာပေးလို့ ကျေးဇူးတင်ပါတယ်! 🌟"
//     },
//     3: {
//         // Tình Yêu Vô Tận -> အဆုံးမဲ့ အချစ် (Endless Love)
//         title: "🌹 အဆုံးမဲ့ အချစ်", 
//         // Tình yêu của anh dành cho em sâu đậm như đại dương, rộng lớn như bầu trời. Em là duy nhất! 💖
//         message: "မင်းအပေါ်ထားတဲ့ ကိုယ့်ရဲ့အချစ်က ပင်လယ်သမုဒ္ဒရာလို နက်ရှိုင်းပြီး ကောင်းကင်လို ကျယ်ပြန့်ပါတယ်။ မင်းတစ်ယောက်တည်းပါပဲ! 💖"
//     },
//     4: {
//         // Điều Ước Sinh Nhật -> မွေးနေ့ဆုတောင်း (Birthday Wish)
//         title: "💝 မွေးနေ့ဆုတောင်း", 
//         // Anh chỉ mong em luôn vui vẻ, khỏe mạnh và hạnh phúc. Anh sẽ luôn ở đây vì em! 🎂✨
//         message: "မင်းအမြဲတမ်း ပျော်ရွှင်၊ ကျန်းမာ၊ ချမ်းမြေ့ပါစေလို့ ကိုယ်ဆုတောင်းပေးပါတယ်။ မင်းအတွက် အမြဲတမ်း ဒီမှာရှိနေမှာပါ! 🎂✨"
//     }
// };

// // Mở món quà
// function openGift(giftNumber) {
//     const gift = gifts[giftNumber];
//     document.getElementById('modalTitle').textContent = gift.title;
//     document.getElementById('modalMessage').textContent = gift.message;
//     document.getElementById('giftModal').style.display = 'flex';
//     createConfetti();
// }

// // Đóng modal
// function closeModal() {
//     document.getElementById('giftModal').style.display = 'none';
// }

// // Hiển thị tình yêu
// // Hiển thị tình yêu (Đã nâng cấp đẹp mắt hơn)
// function showLove() {
//     createHearts();
//     createConfetti();
    
//     // Sử dụng SweetAlert2 thay vì alert thông thường
//     Swal.fire({
//         title: '🎉 ပျော်ရွှင်ဖွယ် မွေးနေ့ပါ! 🎂', // Tiêu đề: Happy Birthday
//         text: '💕 ကိုယ်မင်းကို အရမ်းချစ်တယ်! မင်းမွေးနေ့မှာ ပျော်ရွှင်ပါစေလို့ ဆုတောင်းပေးလိုက်ပါတယ်! 🎉', // Nội dung lời chúc
        
//         // Ảnh động dễ thương (Gấu ôm tim hoặc Hôn)
//         imageUrl: 'https://media.tenor.com/Bf0M0tK2gQ0AAAAi/bear-kiss.gif', 
//         imageWidth: 90,
//         imageHeight: 90,
//         imageAlt: 'Cute Love Gif',
        
//         // Màu sắc và nút bấm
//         confirmButtonText: '❤️ ချစ်တယ် (Love You) ❤️', // Nút xác nhận
//         confirmButtonColor: '#ff578a', // Màu hồng đậm cho nút
//         background: '#fff0f6', // Nền thông báo màu hồng nhạt
//         color: '#5c3a58', // Màu chữ
        
//         // Hiệu ứng xuất hiện
//         showClass: {
//             popup: 'animate__animated animate__fadeInDown'
//         },
//         hideClass: {
//             popup: 'animate__animated animate__fadeOutUp'
//         },
        
//         // Cấu hình phông nền mờ
//         backdrop: `
//             rgba(0,0,0,0.4)
//             left top
//             no-repeat
//         `
//     });
// }
// // Tạo trái tim bay
// function createHearts() {
//     const container = document.getElementById('heartsContainer');
//     const hearts = ['❤️', '💕', '💖', '💗', '💝', '💓'];
    
//     for (let i = 0; i < 20; i++) {
//         setTimeout(() => {
//             const heart = document.createElement('div');
//             heart.className = 'heart';
//             heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
//             heart.style.left = Math.random() * 100 + '%';
//             heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
//             container.appendChild(heart);
            
//             setTimeout(() => heart.remove(), 4000);
//         }, i * 200);
//     }
// }

// // Tạo hiệu ứng confetti
// function createConfetti() {
//     const colors = ['#f093fb', '#f5576c', '#4facfe', '#00f2fe', '#ffd89b', '#19547b'];
    
//     for (let i = 0; i < 50; i++) {
//         setTimeout(() => {
//             const confetti = document.createElement('div');
//             confetti.className = 'confetti';
//             confetti.style.left = Math.random() * 100 + '%';
//             confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
//             confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
//             confetti.style.animationDelay = Math.random() * 0.5 + 's';
//             document.body.appendChild(confetti);
            
//             setTimeout(() => confetti.remove(), 3000);
//         }, i * 50);
//     }
// }
// // ... code cũ của phần gifts, openGift ...

// // Hàm cập nhật giao diện (Icon xoay, nốt nhạc bay)
// function updateMusicUI(playing) {
//     if (playing) {
//         musicIcon.textContent = '🎵'; // Hiện nốt nhạc
//         musicBtn.classList.add('music-playing'); // Xoay tròn
//     } else {
//         musicIcon.textContent = '🔇'; // Hiện loa tắt
//         musicBtn.classList.remove('music-playing'); // Ngừng xoay
//     }
// }

// // Hàm bật/tắt khi nhấn nút ở góc màn hình (Thủ công)
// function toggleMusic() {
//     if (isPlaying) {
//         music.pause();
//         isPlaying = false;
//         updateMusicUI(false);
//     } else {
//         music.play();
//         isPlaying = true;
//         updateMusicUI(true);
//     }
// }

// // --- QUAN TRỌNG: TỰ ĐỘNG BẬT KHI CHẠM MÀN HÌNH ---
// // Lắng nghe sự kiện click trên toàn bộ trang web
// document.addEventListener('click', function() {
//     // Chỉ thực hiện nếu nhạc chưa được bật
//     if (!isPlaying) {
//         music.play().then(() => {
//             isPlaying = true;
//             updateMusicUI(true);
//             console.log("Đã phát nhạc do người dùng chạm vào màn hình!");
//         }).catch(error => {
//             console.log("Lỗi phát nhạc: ", error);
//         });
//     }
// }, { once: true }); // { once: true } nghĩa là chỉ chạy 1 lần duy nhất đầu tiên

// // Tự động tạo hiệu ứng khi trang load
// window.addEventListener('load', () => {
//     setTimeout(createHearts, 1000);
// });