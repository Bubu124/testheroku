var modal = document.getElementById('myModal');
var modalAdd= document.querySelector('.modal-add');
var btn = document.getElementById("myBtn");
// var span = document.querySelector(".closeBtn");
var modalAddPrice= document.getElementById("modalAddPrice");
var modalAddShowTime = document.getElementById("modalAddShowTime");
var modalEditShowTime = document.getElementById("modalEditShowTime");


$('#btnAddPrice').on('click', function(){
    modalAddPrice.style.display = "block";
  });

$('#btnAddShowTime').on('click', function(){
  modalAddShowTime.style.display = "block";
});
// $('.btnEditShowTime').on('click', function(){
//     var $this=$(this);
//     var idFilm=$this.attr('idFilm');
//     var date=$this.attr('date');
//     $.ajax({
//         url: "/admin/showtime/load-edit",
//         method: "POST",
//         contentType: "application/json",
//         data: JSON.stringify({idFilm:idFilm,date:date}),
//         success: function (result) {
//             result.date=(new Date(result.date)).toLocaleDateString('en-GB');
//             $('.nameEdit').html(result.nameEN);
//             $('.dateEdit').html(result.date);
//             $('.first-row-editSc').html(result.htmlSend);
//             modalEditShowTime.style.display = "block";
//         }
//     })
// });
$('.btnShowTimeDetail').on('click', function(){
    modalEditShowTime.style.display = "block";
  });
$('.close-showTime').on('click',function(){
  modalAddShowTime.style.display = "none";
  modalEditShowTime.style.display = "none";
  modalAddPrice.style.display = "none";
});
    // span.onclick = function () {
    //     modal.style.display = "none";
    // }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        else if (event.modalAdd == modal){

        }
    }

//ADMIN

//Save Add click
$('.btn-saveAdd').click(function(){
    var formm = $('.formAdd')[0];
    var data = new FormData(formm);
        $.ajax({
            url: "/admin/showtime/add-showtime",
            type: "POST",
            enctype: "multipart/form-data",
            cache: false,
            processData: false,
            contentType: false,
            data: data,
            success: function (result) {
               if (result=="success"){
                    modalAddShowTime.style.display = "none";
                    window.location.reload();
               } else {
                   $('.alertAdd').html(result);
               }
        }
    });
})

//Add element sc
$('#btnAddSC').on('click', () => {
    var htmlObj = $('#form-addSC');
    htmlObj.append(`
    <div class="lc-suatchieu">
        `+$('.first-row-addSc').html()+`
        <div class="">
            <button type="button" class="btnDelSC"> <i class="fa fa-times" aria-hidden="true"></i></button>
        </div>
    </div>`); 
    $('.btnDelSC').each(function(){
        var $this=$(this);
        var rowAddSt = $this.closest('.lc-suatchieu');
        $this.click(function(e){
            e.preventDefault();
            rowAddSt.remove();
        })
    })
})


//Choose price seat

$(function(){

    $("input:radio[name*='flexRadioDefault2']").click(function(){

        $(".input-datetime").attr('disabled', false);
        $(".seat-change").attr('disabled', false);
        $(".seat-normal").attr('disabled', true);
        $("input:radio[name*='flexRadioDefault1']").attr('checked', false);
    });

    $("input:radio[name*='flexRadioDefault1']").click(function(){

        $(".seat-normal").attr('disabled', false);
        $(".input-datetime").attr('disabled', true);
        $(".seat-change").attr('disabled', true);
        $("input:radio[name*='flexRadioDefault2']").attr('checked', false);
        

    });
});

