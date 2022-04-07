var modal = document.getElementById('myModal');
var modalAdd= document.querySelector('.modal-add');
var btn = document.getElementById("myBtn");
var span = document.querySelector(".closeBtn");
var modalAddShowTime = document.getElementById("modalAddShowTime");


$('#btnAddShowTime').on('click', function(){
  modalAddShowTime.style.display = "block";
});
$('.close-showTime').on('click',function(){
  modalAddShowTime.style.display = "none";
});
    span.onclick = function () {
        modal.style.display = "none";
    }
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
    <div class="row lc-suatchieu">
        `+$('.first-row-addSc').html()+`
        <div class="col-2">
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


//Block the user
window.onload = disableSelect();

function disableSelect() {
    const selectPcs = document.querySelectorAll('.sl-active');
    selectPcs.forEach(element => {
        element && (element.disabled = true);
    });
}

function toggleSelect(e) {
    const selectPc = e.parentElement.parentElement.querySelector('.sl-active');
    selectPc && (selectPc.disabled = e.checked);
}

