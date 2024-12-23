function toggleLanguage() {
    const languageToggleButton = document.getElementById('language-toggle');
    const isEnglish = languageToggleButton.innerText === 'EN';

    // Thay đổi ngôn ngữ của nút
    languageToggleButton.innerText = isEnglish ? 'VI' : 'EN';

    // Tạo hiệu ứng mượt mà cho việc thay đổi văn bản
    const elementsToChange = [
        { id: 'about-title', en: 'About Me', vi: 'Giới Thiệu' },
        { id: 'about-description', en: 'Welcome to my personal page! 🎮 I am QUANG.DEV, a dedicated gamer 👾 and content creator 🎥 specializing in Naraka. Follow me for tips 💡, gameplay 🎮, and insights into the gaming world 🌍! 🚀', vi: 'Chào mừng bạn đến với trang cá nhân của tôi! 🎮 Tôi là QUANG.DEV, một game thủ tận tâm 👾 và người sáng tạo nội dung 🎥 chuyên về Naraka. Theo dõi tôi để nhận mẹo 💡, gameplay 🎮, và những cái nhìn về thế giới game 🌍! 🚀' },
        { id: 'social-title', en: 'Find Me Online', vi: 'Tìm tôi trên mạng' },
        { id: 'projects-title', en: 'My Projects', vi: 'Dự Án Của Tôi' },
        { id: 'project-link', en: 'Access My Projects', vi: 'Truy Cập Vào Dự Án' },
        

        { id: 'stats-title', en: 'Currently playing game', vi: 'Game đang chơi' },
        { id: 'highlights-title', en: 'VIDEOS', vi: 'VIDEO' },
        { id: 'contact-title', en: 'DONATE ME', vi: 'ỦNG HỘ TÔI' },
        { id: 'footer-text', en: '&copy; 2024 QUANG.DEV. All rights reserved.', vi: '&copy; 2024 QUANG.DEV. Mọi quyền được bảo lưu.' }
    ];

    elementsToChange.forEach(element => {
        const el = document.getElementById(element.id);
        const currentText = isEnglish ? element.en : element.vi;

        // Áp dụng hiệu ứng mượt mà
        el.classList.add('fade-out');
        setTimeout(() => {
            el.innerHTML = currentText;
            el.classList.remove('fade-out');
            el.classList.add('fade-in');
        }, 300); // Chờ đợi trước khi thay đổi nội dung
    });

    // Các liên kết trong danh sách không thay đổi, vì vậy chúng không được đưa vào trong mảng `elementsToChange`.
}
