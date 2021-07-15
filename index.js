$('#AppSizeEstimator a').click(function(e) {
    e.preventDefault();
});




//toggling all the sections 
$(".barItem").click(function(){
    $(".category.ng-scope").addClass("hidden");
    let data = $(this).attr("data-id");
    $('.category.ng-scope[data-id=' + data + ']').toggleClass('hidden');
});





// bordering the active section 
$(".redBorder").click(function(){
    $(".redBorder").removeClass("active");
    $(this).addClass("active");
    let dataId = $(this).data("id");
    $(".barItem").removeClass("active");
    $('.barItem[data-id=' + dataId + ']').addClass('active');
});







// adding cart
$(".btnPlus").click(function(){

    var plusData = $(this).data("plus");
    var prevVal = $('.newVal[data-plus=' + plusData + ']').val();
    var intVal = parseInt(prevVal);
    if(intVal < 99){
        var newValue = (intVal + 1);
        $('.newVal[data-plus=' + plusData + ']').val(newValue);
    }

    //data-spacer value reniewing by addition And making cm to m
    var spacerVal = $('.newVal[data-plus=' + plusData + ']').data("spacer");
    var currentParent = $('.newVal[data-plus=' + plusData + ']').data("parent");
    var parentPrevVal = $('.thisRoomSpace[data-parent=' + currentParent + ']').text();
    var parentInt = parentPrevVal;
    var parentNewVal = ( ( (parentInt * 100) + spacerVal) / 100);
    
    var plusNewNumber = Number(Math.round(parentNewVal+'e5')+'e-5');
    $('.thisRoomSpace[data-parent=' + currentParent + ']').text(plusNewNumber);


    var showval = $("#willNeed").val();
    if(isNaN(showval)){
        alert("nan");
        $('.thisRoomSpace[data-parent=' + currentParent + ']').text(0);
        $("#willNeed").val(0);
    }



    //showing empty this field 
    let deleteBtn = $(".btnDelete[data-parent=" + currentParent + "]");
    deleteBtn.removeClass("hidden");
    $(deleteBtn).click(function(){
        $('.thisRoomSpace[data-parent=' + currentParent + ']').text(0);
        $('.newVal[data-parent=' + currentParent + ']').val(0);
        runTotal();
        deleteBtn.addClass("hidden");
    });



    // showing changed all amount in the section where it to show 
    function runTotal(){

    let needVal = $("#willNeed").val();
    let livingVal = Number($('.thisRoomSpace[data-parent=livingShow]').text());
    let mainVal = Number($('.thisRoomSpace[data-parent=mainShow]').text());
    let kitchenVal = Number($('.thisRoomSpace[data-parent=kitchenShow]').text());
    let kidsVal = Number($('.thisRoomSpace[data-parent=kidsShow]').text());
    let whiteVal = Number($('.thisRoomSpace[data-parent=whiteShow]').text());
    let sportsVal = Number($('.thisRoomSpace[data-parent=sportsShow]').text());
    let boxVal = Number($('.thisRoomSpace[data-parent=boxesShow]').text());
    let officeVal = Number($('.thisRoomSpace[data-parent=officeShow]').text());
    var newNeedVal = Number(Math.round((livingVal + mainVal + kitchenVal +
        kidsVal + whiteVal + sportsVal + boxVal + officeVal)+'e5')+'e-5');
    $("#willNeed").val(newNeedVal);

    // setting store value 
    if((newNeedVal>0) && (12>=newNeedVal)){
        $("#storeId").val(6);
    }
    else if((newNeedVal>12) && (15>=newNeedVal)){
        $("#storeId").val(7);
    }
    else if((newNeedVal>15) && (16>=newNeedVal)){
        $("#storeId").val(8);
    }
    else if((newNeedVal>16) && (20>=newNeedVal)){
        $("#storeId").val(10);
    }
    else if((newNeedVal>20) && (22.5>=newNeedVal)){
        $("#storeId").val(11);
    }
    else if((newNeedVal>22.5) && (24.5>=newNeedVal)){
        $("#storeId").val(12);
    }
    else if((newNeedVal>24.5) && (25.5>=newNeedVal)){
        $("#storeId").val(13);
    }
    else if((newNeedVal>25.5) && (32>=newNeedVal)){
        $("#storeId").val(16);
    }
    else if((newNeedVal>32) && (48>=newNeedVal)){
        $("#storeId").val(24);
    }
    else if(newNeedVal>48){
        $("#storeId").val(33);
    }else if(newNeedVal === 0){
        $("#storeId").val(0);
    }



    }
    runTotal();




});





//minusing from cart 
$(".btnMin").click(function(){

    var minusData = $(this).data("minus");
    var prevVal = $('.newVal[data-minus=' + minusData + ']').val();
    var intVal = parseInt(prevVal);
    if(intVal > 0){
        var newValue = (intVal - 1);
        $('.newVal[data-minus=' + minusData + ']').val(newValue);
    }
    
    //data-spacer value reniewing by subtraction And making cm to m
    var spacerVal = $('.newVal[data-minus=' + minusData + ']').data("spacer");
    var currentParent = $('.newVal[data-minus=' + minusData + ']').data("parent");
    var parentPrevVal = $('.thisRoomSpace[data-parent=' + currentParent + ']').text();
    var parentInt = parentPrevVal;
    if((intVal > 0) ){
        var parentNewVal = (((parentInt * 100) - spacerVal) / 100);
        var minusNewNumber = Number(Math.round(parentNewVal+'e5')+'e-5');
        $('.thisRoomSpace[data-parent=' + currentParent + ']').text(minusNewNumber);
    }

    //making the room value 0 if any nan value occurs
    let thisRoomPrevVal = Number($('.thisRoomSpace[data-parent=' + currentParent + ']').text());
    if(isNaN(thisRoomPrevVal)){
        $('.thisRoomSpace[data-parent=' + currentParent + ']').text(0);
    }

    
    var showval = $("#willNeed").val();
    if(isNaN(showval)){
        alert("nan minusing");
        $('.thisRoomSpace[data-parent=' + currentParent + ']').text(0);
        $("#willNeed").val(0);
    }


    // showing changed all amount in the section where it to show 
    let needVal = $("#willNeed").val();
    let livingVal = Number($('.thisRoomSpace[data-parent=livingShow]').text());
    let mainVal = Number($('.thisRoomSpace[data-parent=mainShow]').text());
    let kitchenVal = Number($('.thisRoomSpace[data-parent=kitchenShow]').text());
    let kidsVal = Number($('.thisRoomSpace[data-parent=kidsShow]').text());
    let whiteVal = Number($('.thisRoomSpace[data-parent=whiteShow]').text());
    let sportsVal = Number($('.thisRoomSpace[data-parent=sportsShow]').text());
    let boxVal = Number($('.thisRoomSpace[data-parent=boxesShow]').text());
    let officeVal = Number($('.thisRoomSpace[data-parent=officeShow]').text());
    var newNeedVal = Number(Math.round((livingVal + mainVal + kitchenVal +
        kidsVal + whiteVal + sportsVal + boxVal + officeVal)+'e5')+'e-5');
    $("#willNeed").val(newNeedVal);




    // setting store value 
    if((newNeedVal>0) && (12>=newNeedVal)){
        $("#storeId").val(6);
    }
    else if((newNeedVal>12) && (15>=newNeedVal)){
        $("#storeId").val(7);
    }
    else if((newNeedVal>15) && (16>=newNeedVal)){
        $("#storeId").val(8);
    }
    else if((newNeedVal>16) && (20>=newNeedVal)){
        $("#storeId").val(10);
    }
    else if((newNeedVal>20) && (22.5>=newNeedVal)){
        $("#storeId").val(11);
    }
    else if((newNeedVal>22.5) && (24.5>=newNeedVal)){
        $("#storeId").val(12);
    }
    else if((newNeedVal>24.5) && (25.5>=newNeedVal)){
        $("#storeId").val(13);
    }
    else if((newNeedVal>25.5) && (32>=newNeedVal)){
        $("#storeId").val(16);
    }
    else if((newNeedVal>32) && (48>=newNeedVal)){
        $("#storeId").val(24);
    }
    else if(newNeedVal>48){
        $("#storeId").val(33);
    }else if(newNeedVal === 0){
        $("#storeId").val(0);
    }




    //removing the empty this room button while there is no value on the existing entire room 
    let cartNameSpace = Number($('.thisRoomSpace[data-parent=' + currentParent + ']').text());
    if (cartNameSpace == 0){
        let deleteBtn = $(".btnDelete[data-parent=" + currentParent + "]");
        deleteBtn.addClass("hidden");
    }


});



$(".btnClose").click(function(){
    $('.barItem').removeClass('active');
});


$(".newVal").val(0);
$("#willNeed").val(0);
$("#storeId").val(0);
