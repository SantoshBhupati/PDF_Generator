var steps=Array.from(document.querySelectorAll(".step"));
var next_btn=document.querySelector(".button");
var prev_btn=document.querySelector(".active");
////////////////
var State_Name=document.querySelector("#State_Name");
var County_Name=document.querySelector("#County_Name");
var Affiant_Personal_Title=document.querySelector("#Affiant_Personal_Title");
var Affiant_Name=document.querySelector("#Affiant_Name");
var Affiant_Address=document.querySelector("#Affiant_Address");
var Affiant_City=document.querySelector("#Affiant_City");
var Affiant_State=document.querySelector("#Affiant_State");
var Affiant_Zip_Code=document.querySelector("#Affiant_Zip_Code");
/////////
var Decedent_Personal_Title=document.querySelector("#Decedent_Personal_Title");
var Decedent_Date_of_Death=document.querySelector("#Decedent_Date_of_Death");
var Decedent_Address=document.querySelector("#Decedent_Address");
var Decedent_City=document.querySelector("#Decedent_City");
var Decedent_State=document.querySelector("#Decedent_State");
var Decedent_Zip_Code=document.querySelector("#Decedent_Zip_Code");
////////////////////////
var District_or_Court_Name=document.querySelector("#District_or_Court_Name");
var Required_Waiting_Period_Days=document.querySelector("#Required_Waiting_Period_Days");
var Relationship_Details=document.querySelector("#Relationship_Details");
var Estate_Value=document.querySelector("#Estate_Value");
/////////////////////////////
var Decendat_first_property=document.querySelector("#Decendat_first_property");
var Decedent_first_property_value=document.querySelector("#Decedent_first_property_value");
var Decedent_first_property_location=document.querySelector("#Decedent_first_property_location");
var Decendat_second_property=document.querySelector("#Decendat_second_property");
var Decedent_second_property_value=document.querySelector("#Decedent_second_property_value");
var Decedent_second_property_location=document.querySelector("#Decedent_second_property_location");
var Decendat_third_property=document.querySelector("#Decendat_third_property");
var Decedent_third_property_value=document.querySelector("#Decedent_third_property_value");
var Decedent_third_property_location=document.querySelector("#Decedent_third_property_location");
var Decendat_fourth_property=document.querySelector("#Decendat_fourth_property");
var Decedent_fourth_property_value=document.querySelector("#Decedent_fourth_property_value");
var Decedent_fourth_property_location=document.querySelector("#Decedent_fourth_property_location");
///////////////////////////////
var First_Witness_Name=document.querySelector("#First_Witness_Name");
var Second_Witness_Name=document.querySelector("#Second_Witness_Name");
var First_Witness_Address=document.querySelector("#First_Witness_Address");
var Second_Witness_Address=document.querySelector("#Second_Witness_Address");
var First_Witness_City=document.querySelector("#First_Witness_City");
var Second_Witness_City=document.querySelector("#Second_Witness_City");
var First_Witness_State=document.querySelector("#First_Witness_State");
var Second_Witness_State=document.querySelector("#Second_Witness_State");
var First_Witness_Zip_Code=document.querySelector("#First_Witness_Zip_Code");
var Second_Witness_Zip_Code=document.querySelector("#Second_Witness_Zip_Code");
var First_Witness_Telephone_Number=document.querySelector("#First_Witness_Telephone_Number");
var Second_Witness_Telephone_Number=document.querySelector("#Second_Witness_Telephone_Number");
var First_Decedent_liability=document.querySelector("#First_Decedent_liability");
var First_amount_owed=document.querySelector("#First_amount_owed");
var Second_Decedent_liability=document.querySelector("#Second_Decedent_liability");
var Second_amount_owed=document.querySelector("#Second_amount_owed");
var Third_Decedent_liability=document.querySelector("#Third_Decedent_liability");
var Third_amount_owed=document.querySelector("#Third_amount_owed");
var Fourth_Decedent_liability=document.querySelector("#Fourth_Decedent_liability");
var Fourth_amount_owed=document.querySelector("#Fourth_amount_owed");
//////////////////////////////
var internal_box=document.querySelectorAll(".internal_box");
var paragraph=document.querySelectorAll(".paragraph");
var bold_titles=document.querySelectorAll(".bold_titles");
var line_down=document.querySelectorAll(".line_down");
var head_text=document.querySelectorAll(".head_text");
var semi_bold=document.querySelectorAll(".semi_bold");
var internal_div=document.querySelector(".internal_div");
var text_data=document.querySelectorAll(".text_data");
var table_style=document.querySelectorAll(".table_style");
var plus_sign=document.querySelector(".plus_sign");
var negative_sign=document.querySelector(".negative_sign");
var table_style_1=document.querySelector(".table_style_1");
var  ulclass=document.querySelector(".ulclass");
var two_cl_table=document.querySelector(".two_cl_table");
var box_1=document.querySelector(".box_1");
////////////////////////////////////////////
////////////////////
var outerContainer = document.getElementById("overflow_box");
var innerContainer = document.getElementById("internal_div");
var divs = document.querySelectorAll("#internal_div > div");
var outerContainerRect = outerContainer.getBoundingClientRect();
var innerContainerRect = innerContainer.getBoundingClientRect();
console.log(outerContainerRect)
console.log(innerContainerRect)
outerContainer.addEventListener("scroll", function() {
const div_1=document.querySelector("#div1")
const div_1_coords=div_1.getBoundingClientRect();
const div_2=document.querySelector("#div2")
const div_2_coords=div_2.getBoundingClientRect();
const div_3=document.querySelector("#div3");
const div_3_coords=div_3.getBoundingClientRect();

if((div_1_coords.top <=220) && (div_1_coords.top >=-762.4000244140625
  )){
  box_1.innerHTML='1'
}
if((div_2_coords.top <=220) && (div_2_coords.top >= -674.2999877929688)){
  box_1.innerHTML='2'
}
if((div_3_coords.top <=220) && (div_3_coords.top >=57)){
  box_1.innerHTML='3'
}
});
////////////////////////////////

function showFields(setId) {
  var fields = document.getElementById("Additional_set_" + setId);
  fields.style.display = "block";
  createingTable(setId);
}

function hideFields(setId) {
   if(setId==1){
    var field_1 = document.getElementById("Additional_set_1");
    var field_2 = document.getElementById("Additional_set_2");
    var field_3 = document.getElementById("Additional_set_3");
    var field_4 = document.getElementById("Additional_set_4");
    field_1.style.display = "none";
    field_2.style.display = "none";
    field_3.style.display = "none";
    field_4.style.display = "none";
    removetable(1)
    removetable(2)
    removetable(3)
    removetable(4)
   }
   if(setId==2){
    var field_2 = document.getElementById("Additional_set_2");
    var field_3 = document.getElementById("Additional_set_3");
    var field_4 = document.getElementById("Additional_set_4");
    field_2.style.display = "none";
    field_3.style.display = "none";
    field_4.style.display = "none";
    removetable(2)
    removetable(3)
    removetable(4)
   }
   if(setId==3){
    var field_3 = document.getElementById("Additional_set_3");
    var field_4 = document.getElementById("Additional_set_4");
    field_3.style.display = "none";
    field_4.style.display = "none";
    removetable(3)
    removetable(4)
   }
   if(setId==4){
    var field_4 = document.getElementById("Additional_set_4");
    field_4.style.display = "none";
    removetable(4)
   }

}
////////////////////////////////
function showfieldslib(setId){
  var fields = document.getElementById("Additional_set_lib_" + setId);
  fields.style.display = "block";
  creatingTablelibs(setId)
}
function hidefieldslib(setId){
  if(setId==1){
    var field_1 = document.getElementById("Additional_set_lib_1");
    var field_2 = document.getElementById("Additional_set_lib_2");
    var field_3 = document.getElementById("Additional_set_lib_3");
    var field_4 = document.getElementById("Additional_set_lib_4");
    field_1.style.display = "none";
    field_2.style.display = "none";
    field_3.style.display = "none";
    field_4.style.display = "none";
    removetablelib(1)
    removetablelib(2)
    removetablelib(3)
    removetablelib(4)
    
   }
   if(setId==2){
    var field_2 = document.getElementById("Additional_set_lib_2");
    var field_3 = document.getElementById("Additional_set_lib_3");
    var field_4 = document.getElementById("Additional_set_lib_4");
    field_2.style.display = "none";
    field_3.style.display = "none";
    field_4.style.display = "none";
    removetablelib(2)
    removetablelib(3)
    removetablelib(4)
   }
   if(setId==3){
    var field_3 = document.getElementById("Additional_set_lib_3");
    var field_4 = document.getElementById("Additional_set_lib_4");
    field_3.style.display = "none";
    field_4.style.display = "none";
    removetablelib(3)
    removetablelib(4)
   }
   if(setId==4){
    var field_4 = document.getElementById("Additional_set_lib_4");
    field_4.style.display = "none";
    removetablelib(4)
   }
}
function createingTable(setId){
// console.log("hiiiiii")
var newTable = document.createElement("table");
newTable.id="table"+setId;
var row = document.createElement("tr");
var cell1 = document.createElement("td");
cell1.style.overflowWrap = 'break-word';
cell1.id ="cell1_"+setId;
cell1.innerHTML = "________";
var cell2 = document.createElement("td");
cell2.id="cell2_"+setId;
cell2.innerHTML = "________";
var cell3 = document.createElement("td");
cell3.id="cell3_"+setId;
cell3.innerHTML = "________";
row.appendChild(cell1);
row.appendChild(cell2);
row.appendChild(cell3);
newTable.appendChild(row);
newTable.classList.add('dynamic_table');
var valueDescriptionDiv = document.querySelector(".value_description");
valueDescriptionDiv.insertAdjacentElement("beforeend", newTable);
}

function creatingTablelibs(setId){
var newTable = document.createElement("table");
newTable.id="tablelib"+setId;
var row = document.createElement("tr");
var cell1 = document.createElement("td");
cell1.style.overflowWrap = 'break-word';
cell1.id ="cellib1_"+setId;
cell1.innerHTML = "________";
var cell2 = document.createElement("td");
cell2.id="cellib2_"+setId;
cell2.innerHTML = "________";
row.appendChild(cell1);
row.appendChild(cell2);
newTable.appendChild(row);
newTable.classList.add('dynamic_table_1');
var valueDescriptionDiv = document.querySelector(".Decendts_liablities");
valueDescriptionDiv.insertAdjacentElement("beforeend", newTable);
}

function removetable(setId){
const elementToRemove = document.getElementById("table"+setId);
if(elementToRemove !=null){
elementToRemove.remove();
}
}
function removetablelib(setId){
const elementToRemove = document.getElementById("tablelib"+setId);
if(elementToRemove !=null){
elementToRemove.remove();
}
}
///////////////////////////////////////////
function toggleFields(value) {
  var fields = document.getElementById("add_now_field");
  var witness=document.getElementById("Witness");
  if (value == "Add now") {
    fields.style.display = "block";
    witness.style.display="block";

  } else {
    fields.style.display = "none";
    witness.style.display="none";
  }
}


 next_btn.addEventListener("click",function(e){
    let index=0;
    // if(step_number>1){
    //     next_btn.style.left='15%'
    //     prev_btn.style.display = 'block';
    // }
    const current=document.querySelector(".current");
    index=steps.indexOf(current);
    console.log(index);
    if((index +1) > 0){
      next_btn.style.left='15%'
      prev_btn.style.display = 'block';
    }
    if(index==5){
        next_btn.style.left='5%'
        prev_btn.style.display = 'none';
        steps[steps.length-1].classList.remove('current');
        steps[0].classList.add('current');
        step_number=0;
        
    }
    else{
    steps[index].classList.remove('current');
    index++;
    steps[index].classList.add('current');
    }
})
 prev_btn.addEventListener("click",function(e){
    e.preventDefault();
    let index=0;
    // if(step_number==1){
    //     console.log(step_number)
    //     next_btn.style.left='5%'
    //     prev_btn.style.display = 'none';
    // }
    
    const current=document.querySelector(".current");
    index=steps.indexOf(current);
    console.log(index);
    if(index ==1 ){
      next_btn.style.left='5%'
        prev_btn.style.display = 'none';
    }
    steps[index].classList.remove('current');
    index--;
    if(index>=0){
    steps[index].classList.add('current');}
    
 })
  
 //////////////////////////////////////////////////////////////////////////////////////
 ///////////////////////////////
function mainSizespage(){
  for (let i = 0; i < internal_box.length; i++) {
    internal_box[i].style.width = "95%"
  }
  for(let i=0;i<paragraph.length;i++)
  {
    paragraph[i].style.fontSize="10px"
    paragraph[i].style.paddingTop="15px"   
  }
  for(let i=0;i<bold_titles.length;i++){
    bold_titles[i].style.fontSize="20px"
    bold_titles[i].style.marginTop="20px"
  }
  for(let i=0;i<line_down.length;i++){
     line_down[i].style.width="55%"
     line_down[i].style.height="2.5px"
  }
  for(let i=0;i<head_text.length;i++){
  head_text[i].style.fontSize="23px"
  }
  for(let i=0;i<semi_bold.length;i++){
    semi_bold[i].style.fontSize="15px"
  }
  for(let i=0;i<table_style.length;i++){
    table_style[i].style.fontSize="16px"
  }
  ulclass.style.fontSize="10px";
  table_style_1.style.fontSize="10px";
  var dynamic_table=document.querySelector(".dynamic_table");
  if(dynamic_table !=null){
    dynamic_table.style.fontSize="12px";
  }
  var dynamic_table_1=document.querySelector(".dynamic_table_1");
  if(dynamic_table_1 !=null){
    dynamic_table_1.style.fontSize="12px";
  }
  two_cl_table.style.fontSize="10px";
}
/////////////////////////////////////////////////
////////////
function SettingPage(values){
  var internal_box_style = window.getComputedStyle(internal_box[0]);
  var paragraph_style=window.getComputedStyle(paragraph[0]);
  var bold_titles_style=window.getComputedStyle(bold_titles[0]);
  var line_down_style=window.getComputedStyle(line_down[0]);
  var semi_bold_style=window.getComputedStyle(semi_bold[0]);
  var head_text_style=window.getComputedStyle(head_text[0]);
  var ulclass_style=window.getComputedStyle(ulclass);
  var table_style_1_style=window.getComputedStyle(table_style_1);
  var table_style_style=window.getComputedStyle(table_style[0]);
  var two_cl_table_style=window.getComputedStyle(two_cl_table);
  var dynamic_table=document.querySelector(".dynamic_table");
  if(dynamic_table !=null){
    var dynamic_table_style=window.getComputedStyle(dynamic_table);
    var dynamic_table_style_fontsize=parseFloat(dynamic_table_style.getPropertyValue("font-size"))*values+"px";
    dynamic_table.style.fontSize=dynamic_table_style_fontsize;
  }
  var dynamic_table_1=document.querySelector(".dynamic_table_1");
  console.log(dynamic_table_1)
  if(dynamic_table_1 !=null){
    var dynamic_table_style=window.getComputedStyle(dynamic_table_1);
    var dynamic_table_style_fontsize=parseFloat(dynamic_table_style.getPropertyValue("font-size"))*values+"px";
    console.log(dynamic_table_style_fontsize)
    dynamic_table_1.style.fontSize=dynamic_table_style_fontsize;
  }

  //aceesing previous values
  var internal_box_style_width=parseFloat(internal_box_style.getPropertyValue("width"))*values+"px";
  var paragraph_style_fontsize=parseFloat(paragraph_style.getPropertyValue("font-size"))*values+"px";
  var paragraph_style_paddingTop=parseFloat(paragraph_style.getPropertyValue("padding-top"))*values+"px";
  var bold_titles_style_fontsize=parseFloat(bold_titles_style.getPropertyValue("font-size"))*values+"px";
  var bold_titles_style_marginTop=parseFloat(bold_titles_style.getPropertyValue("margin-top"))*values+"px";
  var line_down_style_width=parseFloat(line_down_style.getPropertyValue("width"))*values+"px";
  var line_down_style_height=parseFloat(line_down_style.getPropertyValue("height"))*values+"px";
  var semi_bold_style_fontsize=parseFloat(semi_bold_style.getPropertyValue("font-size"))*values+"px";
  var head_text_style_fontsize=parseFloat(head_text_style.getPropertyValue("font-size"))*values+"px";
  var ulclass_style_fontsize=parseFloat(ulclass_style.getPropertyValue("font-size"))*values+"px";
  var table_style_1_style_fontsize=parseFloat(table_style_1_style.getPropertyValue("font-size"))*values+"px";
  var table_style_style_fontsize=parseFloat(table_style_style.getPropertyValue("font-size"))*values+"px";
  var two_cl_table_style_fontsize=parseFloat(two_cl_table_style.getPropertyValue("font-size"))*values+"px";
  //defining sizes
  for(let i=0;i<head_text.length;i++){
  head_text[i].style.fontSize=head_text_style_fontsize;
  }
  for (let i = 0; i < internal_box.length; i++) {
    internal_box[i].style.width = internal_box_style_width;
  }
  for(let i=0;i<paragraph.length;i++)
  {  
  paragraph[i].style.fontSize=paragraph_style_fontsize
    paragraph[i].style.paddingTop=paragraph_style_paddingTop
  }
  for(let i=0;i<bold_titles.length;i++){
    bold_titles[i].style.fontSize=bold_titles_style_fontsize
    bold_titles[i].style.marginTop=bold_titles_style_marginTop
  }
  for(let i=0;i<line_down.length;i++){
     line_down[i].style.width=line_down_style_width
     line_down[i].style.height=line_down_style_height
  }
  for(let i=0;i<semi_bold.length;i++){
    semi_bold[i].style.fontSize=semi_bold_style_fontsize
  }
  for(let i=0;i<table_style.length;i++){
    table_style[i].style.fontSize=table_style_style_fontsize;
  }
 ulclass.style.fontSize=ulclass_style_fontsize;
 table_style_1.style.fontSize=table_style_1_style_fontsize;
 two_cl_table.style.fontSize=two_cl_table_style_fontsize;
}
//////////////////////////////////
function updateInputField(value) {
  const inputField = document.getElementById(value);
  const inputText = inputField.value;
  if (!isNaN(inputText)) {
    inputField.value = "$" + inputText;
  }
}
///////////////////////
// function Decedent_value(){
//   if(Decedent_first_property_value.value !="")
// }
/////////////////////////////////////////////////////////
/////////////////////////////////////
function pageSize(){
const selectElement = document.getElementById("mySelect");
const selectedOption = selectElement.options[selectElement.selectedIndex];
const selectedValue = selectedOption.value;
// console.log(selectedValue)
if(selectedValue ==2){
  for (let i = 0; i < internal_box.length; i++) {
    internal_box[i].style.margin="auto"
  }
  mainSizespage();
  SettingPage(1.05);
}
if(selectedValue ==3){
  for (let i = 0; i < internal_box.length; i++) {
    internal_box[i].style.margin="auto"
  }
  mainSizespage();
  SettingPage(1.07)
}
if(selectedValue==4){
  for (let i = 0; i < internal_box.length; i++) {
    internal_box[i].style.margin="auto"
  }
  mainSizespage();
    SettingPage(0.5);
}
if(selectedValue==5){
  for (let i = 0; i < internal_box.length; i++) {
    internal_box[i].style.margin="auto"
  }
  mainSizespage();
   SettingPage(0.75)
}
if(selectedValue==6){
  mainSizespage();
  SettingPage(1)
}
if(selectedValue==7){
    mainSizespage();
    SettingPage(1.25)
}
if(selectedValue==8){
  mainSizespage();
  SettingPage(1.50)
}
if(selectedValue==9){
  mainSizespage();
  SettingPage(2)
}
if(selectedValue==10){
  mainSizespage();
  SettingPage(3)
}
if(selectedValue==11){
  mainSizespage();
  SettingPage(4)
}
}
/////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
plus_sign.addEventListener("click",function(e){
  SettingPage(1.1)
})
negative_sign.addEventListener("click",function(e){
  SettingPage(0.9)
})
///////////////////////////////////////////////////////////////////////////
////////////////////////////////////
State_Name.addEventListener("input",function(e){
    e.preventDefault();
    var state_of=document.querySelector(".state_of");
    var state_of_1=document.querySelector(".state_of_1");
    if(State_Name.value !=""){
      state_of.innerHTML=`STATE OF ${State_Name.value}`;
      state_of_1.innerHTML=`STATE OF ${State_Name.value}`;
    }
    else{
        state_of.innerHTML=`STATE OF ____________`;
        state_of_1.innerHTML=`STATE OF ____________`;
      }
})
County_Name.addEventListener("input",function(e){
    e.preventDefault();
    var country_of=document.querySelector(".country_of");
    var country_of_1=document.querySelector(".country_of_1");
    if(County_Name.value !=""){
        country_of.innerHTML=`COUNTRY OF ${County_Name.value}`;
        country_of_1.innerHTML=`COUNTRY OF ${County_Name.value}`;
    }else{
        country_of.innerHTML=`COUNTRY OF ______________`
        country_of_1.innerHTML=`COUNTRY OF ______________`
      }
})
Affiant_Personal_Title.addEventListener("input",function(e){
    e.preventDefault();
    var affiant_personal_title=document.querySelector(".affiant_personal_title");
    if(Affiant_Personal_Title.value !=""){
        affiant_personal_title.innerHTML=`  ${Affiant_Personal_Title.value}`;
    }else{
        affiant_personal_title.innerHTML=`____`;
    }
})
Affiant_Name.addEventListener("input",function(e){
    e.preventDefault();
    var affiant_name=document.querySelector(".affiant_name");
    var affiant_name_1=document.querySelector(".affiant_name_1")
    var affiant_name_2=document.querySelector(".affiant_name_2");
    if(Affiant_Name.value !=""){
      affiant_name.innerHTML=` ${Affiant_Name.value}`
      affiant_name_1.innerHTML=`${Affiant_Name.value}`
      affiant_name_2.innerHTML=`${Affiant_Name.value}`
    }
    else{
      affiant_name.innerHTML=`__________`;
      affiant_name_1.innerHTML=`_________`;
      affiant_name_2.innerHTML=`_________`;
    }
})
Affiant_Address.addEventListener("input",function(e){
    e.preventDefault();
    var affiant_address=document.querySelector(".affiant_address");
    if(Affiant_Address.value !=""){
        affiant_address.innerHTML=` ${Affiant_Address.value}`
    }else{
        affiant_address.innerHTML=`__________`
    }
})

Affiant_City.addEventListener("input",function(e){
    e.preventDefault();
    var affiant_city=document.querySelector(".affiant_city");
    if(Affiant_City.value !=""){
        affiant_city.innerHTML=` ${Affiant_City.value}`
    }else{
        affiant_city.innerHTML=`________`
    }
})
Affiant_State.addEventListener("input",function(e){
    e.preventDefault();
    var affiant_state=document.querySelector(".affiant_state");
    if(Affiant_State.value !="")
      affiant_state.innerHTML=` ${Affiant_State.value}`
    else
      affiant_state.innerHTML=`________`
})

Affiant_Zip_Code.addEventListener("input",function(e){
    e.preventDefault();
    var affiant_zip_code=document.querySelector(".affiant_zip_code");
    if(Affiant_Zip_Code.value !="")
     affiant_zip_code.innerHTML=` ${Affiant_Zip_Code.value}`
    else
      affiant_zip_code.innerHTML=`_______`
})
Decedent_Personal_Title.addEventListener("input",function(e){
    e.preventDefault();
    var decedent_personal_title=document.querySelector(".decedent_personal_title");
    var decedent_personal_title_1=document.querySelector(".decedent_personal_title_1");
    if(Decedent_Personal_Title.value !=""){
        decedent_personal_title.innerHTML=` ${Decedent_Personal_Title.value}`;
        decedent_personal_title_1.innerHTML=`${Decedent_Personal_Title.value}`;
    }
    else{
        decedent_personal_title.innerHTML=`___`
        decedent_personal_title_1.innerHTML=`___`
    }
})
Decedent_Full_Legal_Name.addEventListener("input",function(e){
    e.preventDefault();
    var decedent_full_legal_name= document.querySelector(".decedent_full_legal_name");
    var decedent_full_legal_name_1=document.querySelector(".decedent_full_legal_name_1");
    var decedent_full_legal_name_2=document.querySelector(".decedent_full_legal_name_2");
    var decedent_full_legal_name_3=document.querySelector(".decedent_full_legal_name_3");
    if(Decedent_Full_Legal_Name.value !=""){
        decedent_full_legal_name.innerHTML=` ${Decedent_Full_Legal_Name.value}`
        decedent_full_legal_name_1.innerHTML=` ${Decedent_Full_Legal_Name.value}`
        decedent_full_legal_name_2.innerHTML=` ${Decedent_Full_Legal_Name.value}`
        decedent_full_legal_name_3.innerHTML=` ${Decedent_Full_Legal_Name.value}`
    }
    else{
        decedent_full_legal_name.innerHTML=`_________`
        decedent_full_legal_name_1.innerHTML=`__________`
        decedent_full_legal_name_2.innerHTML=`_________`
        decedent_full_legal_name_3.innerHTML=`_________`
    }
})
Decedent_Place_of_Death.addEventListener("input",function(e){
    e.preventDefault();
    var decedent_place_of_death=document.querySelector(".decedent_place_of_death");
    if(Decedent_Place_of_Death.value !=""){
        decedent_place_of_death.innerHTML=` ${Decedent_Place_of_Death.value}`
    }
    else{
        decedent_place_of_death.innerHTML=`________`
    }
})

Decedent_Date_of_Death.addEventListener("input",function(e){
  var decedent_date_of_death=document.querySelector(".decedent_date_of_death");
  if(Decedent_Date_of_Death.value !=""){
    decedent_date_of_death.innerHTML=` ${Decedent_Date_of_Death.value}`
  }
  else{
    decedent_date_of_death.innerHTML=`_____________`;
  }
})
Decedent_Address.addEventListener("input",function(e){
  e.preventDefault();
  var decedent_address=document.querySelector(".decedent_address");
  if(Decedent_Address.value !=""){
    decedent_address.innerHTML=` ${Decedent_Address.value}`
  }
  else{
    decedent_address.innerHTML=`_____________`
  }
})
Decedent_City.addEventListener("input",function(e){
  e.preventDefault();
  var decedent_city=document.querySelector(".decedent_city");
  if(Decedent_City.value !=""){
    decedent_city.innerHTML=` ${Decedent_City.value}`
  }
  else{
    decedent_city.innerHTML=`_____________`
  }
})
Decedent_State.addEventListener("input",function(e){
  e.preventDefault();
  var decedent_state=document.querySelector(".decedent_state");
  if(Decedent_State.value !=""){
    decedent_state.innerHTML=` ${Decedent_State.value}`
  }
  else{
    decedent_state.innerHTML=`_____________`
  }
})
Decedent_Zip_Code.addEventListener("input",function(e){
  e.preventDefault();
  var decedent_zip_code=document.querySelector(".decedent_zip_code");
  if(Decedent_Zip_Code.value !=""){
    decedent_zip_code.innerHTML=` ${Decedent_Zip_Code.value}`
  }
  else{
    decedent_zip_code.innerHTML=`_____________`
  }
})
District_or_Court_Name.addEventListener("input",function(e){
  e.preventDefault();
  var district_or_court_name=document.querySelector(".district_or_court_name");
  if(District_or_Court_Name.value !=""){
    district_or_court_name.innerHTML=` ${District_or_Court_Name.value}`
  }
  else{
    district_or_court_name.innerHTML=`___________`
  }
})

Required_Waiting_Period_Days.addEventListener("input",function(e){
  e.preventDefault();
  var required_waiting_period_days=document.querySelector(".required_waiting_period_days");
  if(Required_Waiting_Period_Days.value !=""){
    required_waiting_period_days.innerHTML=` ${Required_Waiting_Period_Days.value}`
  }
  else{
    required_waiting_period_days.innerHTML=`_________`
  }
})

Relationship_Details.addEventListener("input",function(e){
  e.preventDefault();
  var relationship_details=document.querySelector(".relationship_details");
  var relationship_details_1=document.querySelector(".relationship_details_1");
  if(Relationship_Details.value !=""){
    relationship_details.innerHTML=` ${Relationship_Details.value}`
    relationship_details_1.innerHTML=` ${Relationship_Details.value}`
  }
  else{
    relationship_details.innerHTML=`________`
    relationship_details_1.innerHTML=`_____`
  }
})

Estate_Value.addEventListener("input",function(e){
  e.preventDefault();
  var estate_value=document.querySelector(".estate_value");
  if(Estate_Value.value !=""){
    estate_value.innerHTML=` ${Estate_Value.value}`
  }else{
    estate_value.innerHTML=`___________`
  }
})

Decendat_first_property.addEventListener("input",function(e){
  var cell1_1=document.getElementById("cell1_1");
  if(Decendat_first_property.value !=""){
    cell1_1.innerHTML=` ${Decendat_first_property.value}`
  }else{
    cell1_1.innerHTML=`__________`
  }
})

Decedent_first_property_value.addEventListener("input",function(e){
  e.preventDefault();
  var cell2_1=document.getElementById("cell2_1");
  if(Decedent_first_property_value.value !=""){
    cell2_1.innerHTML=` ${Decedent_first_property_value.value}`
  }else{
    cell2_1.innerHTML=`________`
  }
})

Decedent_first_property_location.addEventListener("input",function(e){
  e.preventDefault();
  var cell3_1=document.getElementById("cell3_1");
  if(Decedent_first_property_location.value !=""){
    cell3_1.innerHTML=` ${Decedent_first_property_location.value}`
  }
})

Decendat_second_property.addEventListener("input",function(e){
  var cell1_2=document.getElementById("cell1_2");
  if(Decendat_second_property.value !=""){
    cell1_2.innerHTML=` ${Decendat_second_property.value}`
  }else{
    cell1_2.innerHTML=`__________`
  }
})
Decedent_second_property_value.addEventListener("input",function(e){
  e.preventDefault();
  var cell2_2=document.getElementById("cell2_2");
  if(Decedent_second_property_value.value !=""){
    cell2_2.innerHTML=` ${Decedent_second_property_value.value}`
  }else{
    cell2_2.innerHTML=`________`
  }
})
Decedent_second_property_location.addEventListener("input",function(e){
  e.preventDefault();
  var cell3_2=document.getElementById("cell3_2");
  if(Decedent_second_property_location.value !=""){
    cell3_2.innerHTML=` ${Decedent_second_property_location.value}`
  }
})

Decendat_third_property.addEventListener("input",function(e){
  var cell1_3=document.getElementById("cell1_3");
  if(Decendat_third_property.value !=""){
    cell1_3.innerHTML=` ${Decendat_third_property.value}`
  }else{
    cell1_3.innerHTML=`__________`
  }
})
Decedent_third_property_value.addEventListener("input",function(e){
  e.preventDefault();
  var cell2_3=document.getElementById("cell2_3");
  if(Decedent_third_property_value.value !=""){
    cell2_3.innerHTML=` ${Decedent_third_property_value.value}`
  }else{
    cell2_2.innerHTML=`________`
  }
})
Decedent_third_property_location.addEventListener("input",function(e){
  e.preventDefault();
  var cell3_3=document.getElementById("cell3_3");
  if(Decedent_third_property_location.value !=""){
    cell3_3.innerHTML=` ${Decedent_third_property_location.value}`
  }
})

Decendat_fourth_property.addEventListener("input",function(e){
  var cell1_4=document.getElementById("cell1_4");
  if(Decendat_fourth_property.value !=""){
    cell1_4.innerHTML=` ${Decendat_fourth_property.value}`
  }else{
    cell1_4.innerHTML=`__________`
  }
})
Decedent_fourth_property_value.addEventListener("input",function(e){
  e.preventDefault();
  var cell2_4=document.getElementById("cell2_4");
  if(Decedent_fourth_property_value.value !=""){
    cell2_4.innerHTML=` ${Decedent_fourth_property_value.value}`
  }else{
    cell2_4.innerHTML=`________`
  }
})
Decedent_fourth_property_location.addEventListener("input",function(e){
  e.preventDefault();
  var cell3_4=document.getElementById("cell3_4");
  if(Decedent_fourth_property_location.value !=""){
    cell3_4.innerHTML=` ${Decedent_fourth_property_location.value}`
  }
})

First_Witness_Name.addEventListener("input",function(e){
  e.preventDefault();
  var first_Witness_Name=document.querySelector(".First_Witness_Name");
  if(First_Witness_Name.value !=""){
    first_Witness_Name.innerHTML=`Name - ${First_Witness_Name.value}`
  }
  else{
    first_Witness_Name.innerHTML=`Name - _________________`
  }
})

Second_Witness_Name.addEventListener("input",function(e){
  e.preventDefault();
  var second_Witness_Name=document.querySelector(".Second_Witness_Name");
  if(Second_Witness_Name.value !=""){
    second_Witness_Name.innerHTML=`Name - ${Second_Witness_Name.value}`
  }
  else{
    second_Witness_Name.innerHTML=`Name - ________________`
  }
})
First_Witness_Address.addEventListener("input",function(e){
  e.preventDefault();
  var first_Witness_Address=document.querySelector(".First_Witness_Address");
  if(First_Witness_Address.value !=""){
    first_Witness_Address.innerHTML=`Address - ${First_Witness_Address.value}`
  }
  else{
    first_Witness_Address.innerHTML=`Address - ______________`
  }
})
Second_Witness_Address.addEventListener("input",function(e){
  e.preventDefault();
  var second_Witness_Address=document.querySelector(".Second_Witness_Address");
  if(Second_Witness_Address.value !=""){
    second_Witness_Address.innerHTML=`Address- ${Second_Witness_Address.value}`
  }
  else{
    second_Witness_Address.innerHTML=`Address- _______________`
  }
})
First_Witness_City.addEventListener("input",function(e){
  e.preventDefault();
  var first_Witness_City=document.querySelector(".First_Witness_City");
  if(First_Witness_City.value !=""){
    first_Witness_City.innerHTML=`City - ${First_Witness_City.value}`
  }
  else{
    first_Witness_City.innerHTML=`City - _____________`
  }
})
Second_Witness_City.addEventListener("input",function(e){
  e.preventDefault();
  var second_Witness_City=document.querySelector(".Second_Witness_City");
  if(Second_Witness_City.value !=""){
    second_Witness_City.innerHTML=`City - ${Second_Witness_City.value}`
  }
  else{
    second_Witness_City.innerHTML=`City -  ________________`
  }
})

First_Witness_State.addEventListener("input",function(e){
  e.preventDefault();
  var first_Witness_State=document.querySelector(".First_Witness_State");
  if(First_Witness_State.value !=""){
    first_Witness_State.innerHTML=`State - ${First_Witness_State.value}`
  }
  else{
    first_Witness_State.innerHTML=`State - ______________`
  }
})

Second_Witness_State.addEventListener("input",function(e){
  e.preventDefault();
  var second_Witness_State=document.querySelector(".Second_Witness_State");
  if(Second_Witness_State.value !=""){
    second_Witness_State.innerHTML=`State - ${Second_Witness_State.value}`
  }
  else{
    second_Witness_State.innerHTML=`State - ______________`
  }
})
First_Witness_Zip_Code.addEventListener("input",function(e){
  e.preventDefault();
  var first_Witness_Zip_Code=document.querySelector(".First_Witness_Zip_Code");
  if(First_Witness_Zip_Code.value !=""){
    first_Witness_Zip_Code.innerHTML=`Zip code- ${First_Witness_Zip_Code.value}`
  }
  else{
    first_Witness_Zip_Code.innerHTML=`Zip code- _____________________`
  }
})

Second_Witness_Zip_Code.addEventListener("input",function(e){
  e.preventDefault();
  var second_Witness_Zip_Code=document.querySelector(".Second_Witness_Zip_Code");
  if(Second_Witness_Zip_Code.value !=""){
    second_Witness_Zip_Code.innerHTML=`Zip code- ${Second_Witness_Zip_Code.value}`
  }
  else{
    second_Witness_Zip_Code.innerHTML=`Zip code- _____________________`
  }
})

First_Witness_Telephone_Number.addEventListener("input",function(e){
  e.preventDefault();
  var first_Witness_Telephone_Number=document.querySelector(".First_Witness_Telephone_Number");
  if(First_Witness_Telephone_Number.value !=""){
    first_Witness_Telephone_Number.innerHTML=`Phone no. ${First_Witness_Telephone_Number.value}`
  }
  else{
    first_Witness_Telephone_Number.innerHTML=`Phone no. ___________________`
  }
})

Second_Witness_Telephone_Number.addEventListener("input",function(e){
  e.preventDefault();
  var second_Witness_Telephone_Number=document.querySelector(".Second_Witness_Telephone_Number");
  if(Second_Witness_Telephone_Number.value !=""){
    second_Witness_Telephone_Number.innerHTML=`Phone no. ${Second_Witness_Telephone_Number.value}`
  }
  else{
    second_Witness_Telephone_Number.innerHTML=`Phone no. __________________`
  }
})

First_Decedent_liability.addEventListener("input",function(e){
  e.preventDefault();
  var first_Decedent_liability=document.getElementById("cellib1_1");
  if(First_Decedent_liability.value !=""){
    first_Decedent_liability.innerHTML=` ${First_Decedent_liability.value}`
  }
  else{
    first_Decedent_liability.innerHTML=`_________`
  }
})

First_amount_owed.addEventListener("input",function(e){
  e.preventDefault();
  var first_amount_owed=document.getElementById("cellib2_1");
  if(first_amount_owed.value !=""){
    first_amount_owed.innerHTML=` ${First_amount_owed.value}`
  }
  else{
    first_amount_owed.innerHTML=`____________`
  }
})

Second_Decedent_liability.addEventListener("input",function(e){
  e.preventDefault();
  var second_Decedent_liability=document.getElementById("cellib1_2")
  if(Second_Decedent_liability.value !=""){
    second_Decedent_liability.innerHTML=` ${Second_Decedent_liability.value}`
  }
  else{
    second_Decedent_liability.innerHTML=`____________`
  }
})

Second_amount_owed.addEventListener("input",function(e){
  e.preventDefault();
  var second_amount_owed=document.getElementById("cellib2_2");
  if(Second_amount_owed.value !=""){
    second_amount_owed.innerHTML=` ${Second_amount_owed.value}`
  }
  else{
    second_amount_owed.innerHTML=`__________`
  }
})

Third_Decedent_liability.addEventListener("input",function(e){
  e.preventDefault();
  var third_Decedent_liability=document.querySelector("#cellib1_3");
  if(Third_Decedent_liability.value !=""){
    third_Decedent_liability.innerHTML=` ${Third_Decedent_liability.value}`
  }
  else{
    third_Decedent_liability.innerHTML=`____________`
  }
})

Third_amount_owed.addEventListener("input",function(e){
  e.preventDefault();
  var third_amount_owed=document.getElementById("cellib2_3");
  if(Third_amount_owed.value !=""){
    third_amount_owed.innerHTML=` ${Third_amount_owed.value}`
  }
  else{
    third_amount_owed.innerHTML=`_____________`
  }
})

Fourth_Decedent_liability.addEventListener("input",function(e){
  e.preventDefault();
  var fourth_Decedent_liability=document.getElementById("cellib1_4");
  if(Fourth_Decedent_liability.value !=""){
    fourth_Decedent_liability.innerHTML=` ${Fourth_Decedent_liability.value}`
  }
  else{
    fourth_Decedent_liability.innerHTML=`_____________`
  }
})
Fourth_amount_owed.addEventListener("input",function(e){
  var fourth_amount_owed=document.querySelector("#cellib2_4");
  if(Fourth_amount_owed.value !=""){
    fourth_amount_owed.innerHTML=` ${Fourth_amount_owed.value}`
  }
  else{
    fourth_amount_owed.innerHTML=`_________`
  }
})