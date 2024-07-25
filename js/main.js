document.addEventListener("DOMContentLoaded", function () {
    // Tập hợp tất cả các phần tử cần sử dụng
    const backTop = document.querySelector("#back-top");
    const stickyHeaderPC = document.querySelector(".js__stickyHeader");
    const video169s = document.querySelectorAll(".js__video169");
    // search
    const searchContainer = document.querySelector(".js__searchContainer")


    // Xử lý sự kiện khi nhấn nút "back to top"
    function handleBackTop() {
        if(!backTop) return;
        
        backTop.onclick = function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };
        
    }

    // Xử lý sự kiện khi nhấn nút search trên thanh navbar
    function handleSearchNavbar() {
        if(!searchContainer) return

        var searchIcon = searchContainer.querySelector('.js__searchIcon')
        var closeSearch = searchContainer.querySelector('.js__closeSearch')
        var searchInput = searchContainer.querySelector('.js__searchInput')

        searchIcon.onclick = function() {
            searchContainer.classList.add('active')
            searchInput.focus()
        }
        closeSearch.onclick = function() {
            if(searchContainer.closest('.active')){
                searchContainer.classList.remove('active')
                searchInput.value = ''
            }
        }
    }

    // Xử lý video tỉ lệ 16:9
    function handleVideo169() {
        if (video169s) {
            video169s.forEach((video169) => {
                var videos = video169.querySelectorAll("iframe");
                if (videos) {
                    videos.forEach((video) => {
                        var w = video.offsetWidth;
                        video.style.height = (w * 9) / 16 + "px";
                    });
                }
            });
        }
    }

    // Xử lý thanh header dính
    function handleStickyHeader() {
        if (stickyHeaderPC) {
            const isSticky = scrollY > 300;
            stickyHeaderPC.classList.toggle("sticky", isSticky);
        }
    }
    // Hàm hiển thị nút backTop dựa trên vị trí cuộn trang
    function handleBackTopVisibility() {
        if (backTop) {
            if (
                document.body.scrollTop > 300 ||
                document.documentElement.scrollTop > 300
            ) {
                backTop.style.opacity = 1;
                backTop.style.visibility = "visible";
            } else {
                backTop.style.opacity = 0;
                backTop.style.visibility = "hidden";
            }
        }
    }
    // Xử lý sự kiện khi cuộn trang
    function handleWindowScroll() {
        window.onscroll = function () {
            handleStickyHeader();
            handleBackTopVisibility()
        };
    }

    // Khởi tạo tất cả các chức năng
    function initApp() {
        handleBackTop();
        handleVideo169();
        // scroll
        handleWindowScroll();
        handleSearchNavbar();
    }

    // Bắt đầu khởi tạo ứng dụng
    initApp();
});
