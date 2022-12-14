var checkbox=[],input=[],b1,b2,v,save,back,gameState="form",database,listCount,access,takelistno,x,home;

function setup() {
  createCanvas(windowWidth,716);

  database = firebase.database();

  b1 = createButton("Access a list");
  b2 = createButton("Create a list");
  access = createButton("Access");
  takelistno = createInput("0","number");
  save = createButton("Save");
  back = createButton("<=Back");
  b1.position(width/2-100,height/2-20);
  b2.position(width/2-100,height/2+20);
  save.position(width-200,10);
  back.position(width-100,10);
  access.position(width/2-100,height/2+20);
  takelistno.position(width/2-100,height/2-20);
  home = createButton("Home");
  home.position(width-100,10);

  for(var i = 1 ; i<=(height-20)/30;i++) {
    input.push(createInput(""));
    checkbox.push(createCheckbox("",false));
    v = i;
  }

  database.ref("ListCount").on("value",(data)=> {
    listCount = data.val();
  });
}

function draw() {
  background(0);

  x = "list"+takelistno.value();

  database.ref("ListCount").on("value",(data)=> {
    listCount = data.val();
  });

  if(gameState==="form") {
    b1.show();
    b2.show();
  }else{
    b1.hide();
    b2.hide();
  }

  if(gameState==="info") {
    home.show();
  }else{
    home.hide();
  }

  if(gameState==="takelistno") {
    access.show();
    takelistno.show();
  }else{
    access.hide();
    takelistno.hide();
  }

  if(gameState==="form") {
    b2.mousePressed(()=>{
      for(var j = 1;j<=v;j++) {
        checkbox[j-1].show();
        input[j-1].show();
      }

      gameState = "list";
    });

    b1.mousePressed(()=>{
      gameState = "takelistno";
    });

    for(var j = 1;j<=v;j++) {
        checkbox[j-1].hide();
        input[j-1].hide();
    }
  }

  if(gameState==="list" || gameState==="showlist") {
     save.show();
    back.show();
  }else{
    save.hide();
    back.hide();
  }
  
  if(gameState==="list") {
    for(var j = 1;j<=v;j++) {
       checkbox[j-1].position(10,j*29);
       input[j-1].position(50,j*29);
    }
  }

  back.mousePressed(()=>{
   gameState = "form";
  });

  save.mousePressed(()=>{
   saveit();
   gameState = "info";
  });

  if(gameState==="info") {
    fill(255);
    textSize(60);
    text("Your list no.:- "+listCount,width/2-200,height/2);
    for(var j = 1;j<=v;j++) {
      checkbox[j-1].hide();
      input[j-1].hide();
    }

    home.mousePressed(()=>{
      gameState = "form";
    });
  }

  if(gameState==="takelistno") {
    if(takelistno.value()!==0) {
     access.mousePressed(()=>{
      if(takelistno.value()<=listCount) {
       for(var j = 1;j<=v;j++) {
        checkbox[j-1].show();
        input[j-1].show();
       }
       accessit();
       gameState = "showlist";
      }else{
        gameState = "nolist";
       }
     });
    }
  }

  if(gameState==="showlist") {
    for(var j = 1;j<=v;j++) {
      checkbox[j-1].position(10,j*29);
      input[j-1].position(50,j*29);
    }

    save.mousePressed(()=>{
      saveitt();
      takelistno.value(0);
      gameState = "form";
    });
  }

  if(gameState==="nolist") {
    fill(255);
    textSize(60);
    text("No list found",width/2-130,height/2);
  }
}

function saveit() {
  database.ref("list" + (listCount+1)).set({
   heading1:input[0].value(),
   heading2:input[1].value(),
   heading3:input[2].value(),
   heading4:input[3].value(),
   heading5:input[4].value(),
   heading6:input[5].value(),
   heading7:input[6].value(),
   heading8:input[7].value(),
   heading9:input[8].value(),
   heading10:input[9].value(),
   heading11:input[10].value(),
   heading12:input[11].value(),
   heading13:input[12].value(),
   heading14:input[13].value(),
   heading15:input[14].value(),
   heading16:input[15].value(),
   heading17:input[16].value(),
   heading18:input[17].value(),
   heading19:input[18].value(),
   heading20:input[19].value(),
   heading21:input[20].value(),
   heading22:input[21].value(),
   heading23:input[22].value()
  });

  database.ref('/').update({
    ListCount: listCount+1
  });
}

function accessit() {
  database.ref(x+"/heading1").on("value",(data)=>{
    input[0].value(data.val())
  });

  database.ref(x+"/heading2").on("value",(data)=>{
    input[1].value(data.val())
  });

  database.ref(x+"/heading3").on("value",(data)=>{
    input[2].value(data.val())
  });

  database.ref(x+"/heading4").on("value",(data)=>{
    input[3].value(data.val())
  });

  database.ref(x+"/heading5").on("value",(data)=>{
    input[4].value(data.val())
  });

  database.ref(x+"/heading6").on("value",(data)=>{
    input[5].value(data.val())
  });

  database.ref(x+"/heading7").on("value",(data)=>{
    input[6].value(data.val())
  });

  database.ref(x+"/heading8").on("value",(data)=>{
    input[7].value(data.val())
  });

  database.ref(x+"/heading9").on("value",(data)=>{
    input[8].value(data.val())
  });

  database.ref(x+"/heading10").on("value",(data)=>{
    input[9].value(data.val())
  });

  database.ref(x+"/heading11").on("value",(data)=>{
    input[10].value(data.val())
  });

  database.ref(x+"/heading12").on("value",(data)=>{
    input[11].value(data.val())
  });

  database.ref(x+"/heading13").on("value",(data)=>{
    input[12].value(data.val())
  });

  database.ref(x+"/heading14").on("value",(data)=>{
    input[13].value(data.val())
  });

  database.ref(x+"/heading15").on("value",(data)=>{
    input[14].value(data.val())
  });

  database.ref(x+"/heading16").on("value",(data)=>{
    input[15].value(data.val())
  });

  database.ref(x+"/heading17").on("value",(data)=>{
    input[16].value(data.val())
  });

  database.ref(x+"/heading18").on("value",(data)=>{
    input[17].value(data.val())
  });

  database.ref(x+"/heading19").on("value",(data)=>{
    input[18].value(data.val())
  });

  database.ref(x+"/heading20").on("value",(data)=>{
    input[19].value(data.val())
  });

  database.ref(x+"/heading21").on("value",(data)=>{
    input[20].value(data.val())
  });

  database.ref(x+"/heading22").on("value",(data)=>{
    input[21].value(data.val())
  });

  database.ref(x+"/heading23").on("value",(data)=>{
    input[22].value(data.val())
  });
}

function saveitt() {
  database.ref("list"+takelistno.value()).update({
   heading1:input[0].value(),
   heading2:input[1].value(),
   heading3:input[2].value(),
   heading4:input[3].value(),
   heading5:input[4].value(),
   heading6:input[5].value(),
   heading7:input[6].value(),
   heading8:input[7].value(),
   heading9:input[8].value(),
   heading10:input[9].value(),
   heading11:input[10].value(),
   heading12:input[11].value(),
   heading13:input[12].value(),
   heading14:input[13].value(),
   heading15:input[14].value(),
   heading16:input[15].value(),
   heading17:input[16].value(),
   heading18:input[17].value(),
   heading19:input[18].value(),
   heading20:input[19].value(),
   heading21:input[20].value(),
   heading22:input[21].value(),
   heading23:input[22].value()
  });
}