$(function () {

    $('input[name=phone]').mask('+7 (999) 999-99-99');


    $('.menu-opener').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.navbar').toggleClass('active');
    });

    var swiper2 = new Swiper(".we-slide", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });


    // input type file
    $("#FileInput").on('change', function (e) {
        var labelVal = $(".file-title").text();
        var oldfileName = $(this).val();
        fileName = e.target.value.split('\\').pop();

        if (oldfileName == fileName) { return false; }
        var extension = fileName.split('.').pop();

        if ($.inArray(extension, ['jpg', 'jpeg', 'png']) >= 0) {
            $(".filelabel i, .filelabel .file-title").css({ 'color': '#208440' });
            $(".filelabel").css({ 'border': ' 2px solid #208440' });
        }
        else if (extension == 'pdf') {
            $(".filelabel").css({ 'border': ' 2px solid red' });

        }
        else if (extension == 'doc' || extension == 'docx') {
            $(".filelabel").css({ 'border': ' 2px solid #2388df' });
        }
        else {
            $(".filelabel i, .filelabel .file-title").css({ 'color': 'black' });
            $(".filelabel").css({ 'border': ' 2px solid black' });
        }

        if (fileName) {
            if (fileName.length > 10) {
                $(".filelabel .file-title").text(fileName.slice(0, 4) + '...' + extension);
            }
            else {
                $(".filelabel .file-title").text(fileName);
            }
        }
        else {
            $(".filelabel .file-title").text(labelVal);
        }
    });
    
    // custom select
    const selects = document.querySelectorAll('.select-menu');

	selects.forEach(item => {
		let select = item.querySelector('.select');
		let options = item.querySelectorAll('.option');
		let optionList = item.querySelector('.options-list');
		select.onclick = function () {
			this.classList.toggle('active');
			this.classList.toggle('select_active')
			optionList.classList.toggle('active');
		}

		options.forEach(option => {
			option.onclick = function () {
				options.forEach(a => {
					a.classList.remove('selected');
				})
				this.classList.add('selected');
				let parent = this.parentNode.parentNode;
				let select = parent.querySelector('.select');
				let options_list = parent.querySelector('.options-list');
				select.classList.remove('active');
				select.classList.remove('select_active');
				options_list.classList.remove('active');
				select.querySelector('span').innerHTML = this.innerHTML;
			}
		})
	});


	var swiper = new Swiper('.mySwiper', {
		speed: 1000,
		slidesPerView: 7,
		spaceBetween: 70,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	try {
		const swiper = new Swiper('.mySwiper3', {
			loop: true,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
			},
		});
	} catch (error) {
		
	}


});

