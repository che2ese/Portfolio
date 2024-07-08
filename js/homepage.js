// 프로필 카드 확대/축소 토글 함수
function toggleProfileCard() {
    const profileCard = document.querySelector('.profile-card');
    profileCard.classList.toggle('active');
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
});
function typeAnimation(textElement, originalText, interval) {
    textElement.textContent = '';
    let index = 0;
    let timer = setInterval(function() {
        if (index < originalText.length) {
            textElement.textContent += originalText[index];
            index++;
        } else {
            clearInterval(timer);

            // 한 줄 띄우기
            textElement.innerHTML += '<br>';

            // 모든 글자가 출력된 후 2초 후에 다 지우는 애니메이션 추가
            setTimeout(function() {
                let removeTimer = setInterval(function() {
                    if (textElement.textContent.length > 0) {
                        textElement.textContent = textElement.textContent.slice(0, -1); // 마지막 글자를 제거
                    } else {
                        clearInterval(removeTimer);

                        // 한 줄 띄우기
                        textElement.innerHTML += '<br>';

                        // 다시 시작
                        typeAnimation(textElement, originalText, interval);
                    }
                }, interval.removeInterval);
            }, interval.afterRemove); // 2초 후에 다 지우는 애니메이션 시작
        }
    }, interval.typeInterval); // 한 글자씩 출력되는 간격을 100ms로 설정
}
document.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelector('#animate-text');
    const originalText = '안녕하세요 ¡¡¡( •̀ ᴗ •́ )و!!!\nAI & Game Clients Developer를 꿈꾸는 김민성입니다.';

    // 타이핑 애니메이션 시작
    typeAnimation(text, originalText, {
        typeInterval: 100,      // 한 글자씩 출력하는 간격
        removeInterval: 30,     // 한 글자씩 지우는 간격
        afterRemove: 2000       // 모든 글자를 지운 후 대기 시간
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(skillLevel => {
        const width = skillLevel.style.width;
        skillLevel.style.setProperty('--skill-level-width', width);
        skillLevel.style.width = '0';
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevels = entry.target.querySelectorAll('.skill-level');
                skillLevels.forEach(skillLevel => {
                    skillLevel.style.animation = 'fillSkillBar 2s ease forwards'; // 애니메이션 시간 2초로 설정
                });
            } else {
                const skillLevels = entry.target.querySelectorAll('.skill-level');
                skillLevels.forEach(skillLevel => {
                    skillLevel.style.width = '0';
                    skillLevel.style.animation = 'none';
                });
            }
        });
    }, {
        threshold: 0.5
    });

    const skillSections = document.querySelectorAll('.skill-section');
    skillSections.forEach(section => observer.observe(section));
});
document.querySelectorAll('.project').forEach((project) => {
    project.addEventListener('click', () => {
        project.classList.toggle('flipped');
    });
});

window.addEventListener('resize', function() {
    const profileCard = document.querySelector('.profile-card');
    if (window.innerWidth < 1200) { // Adjust the width threshold as needed
        profileCard.style.display = 'none';
    } else {
        profileCard.style.display = 'flex';
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    const profileCard = document.querySelector('.profile-card');
    if (window.innerWidth < 1800) { // Adjust the width threshold as needed
        profileCard.style.display = 'none';
    } else {
        profileCard.style.display = 'flex';
    }
});
function toggleProfileCard() {
    var profileCard = document.querySelector('.profile-card');
    profileCard.classList.toggle('active');
}
