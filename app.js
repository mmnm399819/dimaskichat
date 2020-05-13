 
var socket ;
var users=[];
var rooms=[];
var myid=null;
var myroom=null;
var nopm=false;
var pickedfile=null;
var power={};
var powers=[];
var emos=[];
var dro3=[];
var token='';
function logout()
{
  send('logout',{});close(500);
}
function sendbc(wfile)
{ 
  if(wfile){pickedfile=null; sendfile('d2bc',function(){
       var msg=$(".tboxbc").val();
   $(".tboxbc").val('');
   
   var link=pickedfile;
   pickedfile='';
	if ((msg=="%0A" || msg=="%0a" || msg=='' || msg=='\n') && (link=='' || link==null) ){return;}
 
  send('bc',{msg:msg,link:link}) 
      return;
      });
      } 
      else
      {pickedfile=null;}
  var msg=$(".tboxbc").val();
   $(".tboxbc").val('');
   
   var link=pickedfile;
   pickedfile='';
	if ((msg=="%0A" || msg=="%0a" || msg=='' || msg=='\n') && (link=='' || link==null) ){return;}
 
  send('bc',{msg:msg,link:link})
  } 
 var isIphone=false; 
function refr()
{
    var r=document.referrer||'';
    if(r.indexOf('http://'+location.hostname)==0){return '';}
    if(r.indexOf('://')!=-1){r=r.replace(/(.*?)\:\/\//g,'').split('/')[0];}
    return r;
} 
function load()//d
{  
    setInterval(function(){if (needUpdate){updateusers();updaterooms();needUpdate=false}},2000);
     isIphone = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
 umsg=$("#umsg").html();
    if(typeof $=='undefined' ||typeof io=='undefined'  ){close(5000);return;}
    loadpro();
   //    if($(window).width()<=360)
  //  {$("meta[name='viewport']").attr('content','initial-scale=0.95, user-scalable=0, width=device-width, height=device-height');}
 
  $('#tbox').css('background-color','#AAAAAF') ;$(".rout").hide();$(".redit").hide();
 
   $("#u1").val(decode(getv("u1")));
   $("#u2").val(decode(getv("u2")));
   $("#pass1").val(decode(getv("p1")));
      if (getv("isl")=="yes")
   {
     $('.nav-tabs a[href="#l2"]').tab('show')
    // $(".tlogin").tabs().tabs( "option", "active", 1 )
   }
 uhtml=$("#uhtml").html();
 rhtml=$("#rhtml").html(); 
$('#tlogins button').attr('disabled','true');
socket=io('http://62.210.142.29:1001/');
socket.on('connect', function(){lstat('success','متصل');$('#tlogins button').removeAttr('disabled');});
socket.on('msg',function(data){ondata(data.cmd,data.data);});
socket.on('disconnect', function(){lstat('danger','#t غير متصل');close();});
socket.on('connect_error', function(){lstat('danger','#ce غير متصل');close();});
socket.on('connect_timeout', function(){lstat('danger','#ct غير متصل');close();});
socket.on('reconnect_attempt', function(){lstat('danger','#ra غير متصل');close();});
socket.on('error', function(){lstat('danger','#er غير متصل');close();});
if(getv('refr')==''){setv('refr',refr()||'*')};
if(getv('r')==''){setv('r',getUrlParameter('r')||'*')};
 
$(window).on('resize pushclose pushopen',fixSize);
 //$('textarea').on('blur',function(){    window.scrollTo(0,1); })
$('*[data-toggle="tab"]').on('shown.bs.tab', function (e) {fixSize();});
 $("#tbox").keyup(function (e) { 
if (e.keyCode == 13) {e.preventDefault();Tsend()}});    
 $(".tboxbc").keyup(function (e) { 
if (e.keyCode == 13) {e.preventDefault();sendbc( )}});
 
fixSize();
setTimeout(function(){$('#getonline').attr('src','online.nd');},3000);  
setInterval(updateTimes,20000); 
}
function htmljson(html)
{
  html=$(html);
  var json={};
  $.each(html.find('input'),function(i,e)
  {
        switch ($(e).attr('type'))
    {
      case "text":
    json[$(e).attr('name')]=$(e).val();
    break;
      case "checkbox":
 
    json[$(e).attr('name')]=$(e).prop('checked');
    break;
      case "number":
    json[$(e).attr('name')]= parseInt( $(e).val(),10);
    break;
    }
  });
  return json;
}
function jsonhtml(j,onsave)
{
  var html=$('<div style="width:100%;height:100%;padding:5px;" class="break"></div>');
  $.each(Object.keys(j),function(i,key)
  {
  
    switch ( typeof j[key])
    {
      case "string":
      html.append('<label class="label label-primary">'+key+'</label></br>')
      html.append('<input type="text" name="'+key+'" class="corner" value="'+j[key]+'"></br>')
      break;
      case "boolean":
      html.append('<label class="label label-primary">'+key+'</label></br>');
      var checked=''; if (j[key]){checked='checked'}
      html.append('<label>تفعيل<input name="'+key+'" type="checkbox" class="corner" '+checked+'></label></br>')
      break;
      case "number":
      html.append('<label class="label label-primary">'+key+'</label></br>')
      html.append('<input name="'+key+'" type="number" class="corner" value="'+j[key]+'"></br>')
      break;
    }
  });
  
  html.append('<button class="btn btn-primary fr fa fa-edit">حفظ</button>');
  html.find('button').click(function(){onsave(htmljson(html))});
  return html;
}
var lastfix=0;

function fixSize(again)
{  //again=1;
  
    var w=$(document.body).innerWidth();
   //  $("#d2").width(w- ($("#d0").outerWidth()+4) +'px');
     $("#content").find('.tablebox,#d2').width(w- ($("#d0").outerWidth()+4) +'px');
   var d2= $("#d2");
   d2.height(d2.parent().innerHeight() - ($('.tablebox').outerHeight()+10)+'px');
     
  // $("#d2").css('height',$(window).height()-$('.footer').outerHeight(true)-$('#header').outerHeight(true) -5+'px');
 $(document.body).css('height',window.innerHeight+'px')
//$('#content').css('height',window.innerHeight-kbd+'px')
 $.each($('.pop'),function(i,e){
   $(e).find('.popbody').css('height',$(e).height()-$(e).find('.pophead').height()+'px');
 });
 
 $.each($('.panel-body'),function(i,e){
   var par=$(e).parent(); 
  var h=par.height()-par.find('.panel-heading').height()||0;
   $(e).css('height',h-10+'px')});
 $.each($('.tab-pane'),function(i,e){if($(e).hasClass('grow') ){return;}
   var par=$(e).parent();
  var h=par.height()-par.find('.nav-tabs,.list-group').height();
   $(e).css('height',h-2+'px')});
 // if( $(e).hasClass('active')==false){$(e).addClass('hid')}else{$(e).removeClass('hid')}
   docss()
   startcss()
   if(again!=1){setTimeout(function(){fixSize(1)},100)}
}
function startcss()
{
  
  $.each($('.tab-pane'),function(i,e){if($(e).hasClass('active')){$(e).removeClass('hid') }else{$(e).addClass('hid') }});
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) { 
  $($(e.relatedTarget).attr('href')).addClass('hid') 
  $($(e.target).attr('href')).removeClass('hid') 
})
}
function docss()
{
  $.each($('.filw'),function(i,e)
    {
      var par=$(e).parent();
      var wd=0;
      $.each(par.children(),function(ii,child){if($(child).hasClass('filw')||$(child).hasClass('popover')  ){return;}
        wd+=$(child).outerWidth( true ) ;  
      }); 
      $(e).css('width',(par.width()-wd) -10+'px');
    });
      $.each($('.filh'),function(i,e)
    {
      var par=$(e).parent();
      var wd=0;
      $.each(par.children(),function(ii,child){if($(child).hasClass('filh') ){return;}
        wd+=$(child).outerHeight( true );  
      }); 
      $(e).css('height',(par.height()-wd)   +'px');
    });
}
 function send(cmd,data)
 { 
	 socket.emit('msg',{cmd:cmd,data:JSON.parse(JSON.stringify(data).replace(/\uFFFD/g, ''))});
 }
 
 function pickedemo(e)
 {
   e=$(e);
   var ei= e.attr('title');
   var par=$(e.attr('eid')); 
par.parent().find('.tbox').val($(  par).parent().find('.tbox').val()+' ف'+ei);
  par.popover('hide').blur()
 }
 function roomChanged()
 {
   $("#users").find(".inroom").removeClass("inroom");
   $("#rooms").find(".inroom").removeClass("inroom");
   var r= getroom(myroom);
   $('.bord').removeClass('bord')
   if (r!=null)
   {
     $('.inr').show();
       $('.rout').show();
       $.each(rusers(r.id),function(){$('#users').find('.uid'+this.id).addClass('inroom');});
       $('#rooms').find('.r'+r.id).addClass('inroom bord');
       $('#tbox').css('background-color','');
       if(r.owner==getuser(myid).lid || power.roomowner==true){$('.redit').show();}
   }
   else
   {
     $('.inr').hide();
       $('.rout').hide();$('.redit').hide();
       $('#tbox').css('background-color','#AAAAAF');
   }
 }
 function emopop(eid)
 {
   
   var emo=$(eid)
 
 emo.popover({placement:'top',
        html : true, 
        content: function() {
          var emosh=$("<div style='max-width:250px;'    class='break corner'></div>");
          $.each(emos,function(i,e)
          {
          emosh.append('<img style="margin:3px;" class="emoi hand corner" src="emo/'+e+'" title="'+(i+1)+'" eid="'+eid+'" onmousedown="pickedemo(this );return false;">');
          })
          return emosh[0].outerHTML;
           
        },
        title:""
    });
 }
 var bcc=0;
 var confirmOnPageExit = function (e) 
{
    e = e || window.event;

    var message = 'هل تريد مغادره الدردشه؟';
 
    if (e) 
    {
        e.returnValue = message;
    }
 
    return message;
};
var snapper
function ondata(cmd,data)
{
  data=JSON.parse(unescape(data));
  switch (cmd) {
    case "server":
      $('.s1').removeClass('label-warning').addClass('label-success').text(data.online);
      break;
      case "dro3":
      dro3=data; 
      break;
      case "emos":
      emos=data;
      emopop('.emobox');
      emopop('.emobc');
      break;
    case "login":
      $('#tlogins button').removeAttr('disabled');

      switch (data.msg) {
        case "ok":
          myid = data.id;
          token=data.ttoken;
          setv( 'token',token);
         window.onbeforeunload = confirmOnPageExit;

          $('#tlogins').remove();
          $('#d2,.footer,#d0').show();fixSize();
          snapper = new Snap({
                element: document.getElementById('content') ,disable:'right'
              
            });
          snapper.open('left');$('*[data-target=\'#users\']').trigger('click');
          break;
        case "noname":
          lstat('warning', 'هذا الإسم غير مسجل !');
          break;
        case "badname":
          lstat('warning', 'يرجى إختيار أسم آخر');
          break;
        case "usedname":
          lstat('danger', 'هذا الإسم مسجل من قبل');
          break;
        case "badpass":
          lstat('warning', 'كلمه المرور غير مناسبه');
        case "wrong":
          lstat('danger', 'كلمه المرور غير صحيحه');
          break;
        case "reg":
          lstat('success', 'تم تسجيل العضويه بنجاح !');
          $('#u2').val($('#u3').val());
          $('#pass1').val($('#pass2').val());
          login(2);
          break;
      }
      break;
     case "powers":
     powers=data;
      var u=getuser(myid)
      if(u!=null)
      {power= getpower(u.power||'');
      if(power.cp)
      {$('.cp').show()}else{$('.cp').hide();}
      if(power.publicmsg>0)
      {$('.pmsg').show()}else{$('.pmsg').hide();}
      }

          $.each(users,function(i,e){updateu(e.id)});
     break;
     case "rops":
   var r= getroom(getuser(myid).roomid);
   r.ops=[];
     $.each(data,function(i,e)
     {
         r.ops.push(e.lid);
     })
   //  getroom(getuser(myid).roomid).ops=data;
     break;
    case "power":
      power = data; 
      if(power.cp)
      {$('.cp').show()}else{$('.cp').hide();}
        if(power.publicmsg>0)
      {$('.pmsg').show()}else{$('.pmsg').hide();}
      break;
    case "not":
      var not = $($("#not").html()).first();
      var user = getuser(data.user);
      if (user != null) {
        var uh = $('<div class="fl border corner uzr" style="width:100%;"></div>');
        uh.append("<img src='" + user.pic + "' style='width:24px;height:24px;' class='corner border fl'>");
        uh.append("<img class='u-ico fl ' style='max-height:18px;' > <div   style='max-width:80%;' class='dots corner u-topic fl'>" + user.topic + "</div>");
        uh.find('.u-topic').css({ "background-color": user.bg, 'color': user.ucol });
        var ico=getico(user);
        if(ico!='')
        {
            uh.find('.u-ico').attr('src',ico);
        } 
        not.append(uh);
      }
      not.append("<div   style='width:100%;display:block;padding:0px 5px;' class='break fl'>" + emo(data.msg) + "</div>");
    not.css('left','+='+notpos);notpos+=2;
    if(notpos>=6){notpos=0;}
      $(document.body).append(not);

      break;
    case "delbc":
      $('.bid' + data.bid).remove();
      break;
    case "bclist":
      $.each(data, function (i, e) {  
        AddMsg('.d2bc', e) }) 
      break;
    case "bc": 
      AddMsg('.d2bc', data)
      
   if( snapper.state().state=='closed' || !$('#wall').hasClass('active')){bcc++;hl($('.bcc').html(bcc).parent(),'warning');}
      break;
      case "ops":
      var ops=$('#ops');
    ops.children().remove();
     $.each(data,function(i,e)
     {
         var uh=$($('#uhead').html()).css('background-color','white');
         uh.find('.u-pic').css('width','24px').css('height','24px').css('background-image','url("'+e.pic+'")' );
         uh.find('.u-topic').html(e.topic);
         uh.find('.filw').removeClass('filw').css('width','80%');
         uh.append('<a onclick="send(\'op-\',{lid: \''+e.lid+'\'});" class="fa fa-times">إزاله</a>');
 
         ops.append(uh);
     }); 
      break;
    case "pm":
      if (data.force != 1 && nopm == true && $('#c' + data.pm).length == 0) { send('nopm', { id: data.uid }); return; }
      openw(data.pm, false)
      AddMsg("#d2" + data.pm, data);

      $("#c" + data.pm).find('.u-msg').text(gettext($("<div>" + data.msg + "</div>")));
      $("#chats").prepend($("#c" + data.pm))
      break;
    case "pmsg":
      data.class='pmsgc';
    var e=  AddMsg("#d2", data);
   e.find('.u-msg') .append('<label style="margin-top:2px;color:blue" class="fl nosel fa fa-commenting">إعلان</label>') ;
      break;
    case "msg":
      AddMsg("#d2", data);
      break;
    case "close":
      close();
      break;
    case "ulist":
      users = data;
      $.each(users, function (i, e) { 
        AddUser(e.id, e);
        updateu(e.id);
      });
      $('.busers').text(users.length);
      break;
    case "u-":
      $(".uid" + data).remove();
      users = $.grep(users, function (value) { return value.id != data; });
      wclose(data);
      $('.busers').text(users.length);
      break;
    case "u+":
      users.push(data); 
      AddUser(data.id, data);
      updateu(data.id);
      $('.busers').text(users.length); 
      break;
    case "u^":
if(data.id==myid){myroom=data.roomid;}
      if (users == null) { return; }
var roomchanged=false;
if (getuser(data.id).roomid != data.roomid)
{ roomchanged=true;}
      
      users = $.grep(users, function (value) { return value.id != data.id; });
      users.push(data); 
    if(roomchanged){roomChanged();} 
      updateu(data.id); needUpdate=true;
      
      break;
    case "r^":
      rooms = $.grep(rooms, function (value) { return value.id != data.id; });
      rooms.push(data); 
      updater(data);
       break;
    case "rlist":
      rooms = data;
      $.each(rooms, function (i, e) { 
        addroom(e);
      });
      break;
    case "r+": 
      rooms.push(data);
      addroom(data);
      break;
    case "r-":
      $(".r" + data.id).remove();
      rooms = $.grep(rooms, function (value) { return value.id != data.id; });

      break;
    case "r^":
      rooms = $.grep(rooms, function (value) { return value.id != data.id; });
      rooms.push(data); 
      updater(data);
      break;
  }

}
var notpos=0;
function gettext(d)
{
  $.each(d.find("img"),function(i,e)
    {
      var alt =$(e).attr("alt");
      if (alt !=null){ $("<x>"+alt+"</x>").insertAfter($(e));}
      $(e).remove();
    }); 
  return $(d).text();
}
function login(i)
{
  $('#tlogins button').attr('disabled','true');
  switch (i)
  {
    case 1:
    send('g',{username: $('#u1').val(),fp: getfp(),refr:getv('refr'),r:getv('r')});
         setv("u1",encode($("#u1").val()))
setv('isl','no'); 
    break;
    case 2:
    send('login',{username: $('#u2').val(),password: $('#pass1').val(),fp: getfp(),refr:getv('refr'),r:getv('r')});
    setv("u2",encode($("#u2").val()))
    setv("p1",encode($("#pass1").val()))
    setv('isl','yes'); 
    break;
    case 3:
    send('reg',{username: $('#u3').val(),password: $('#pass2').val(),fp: getfp(),refr:getv('refr'),r:getv('r')});
    break;
  }
}
function hl(e,stat)
{
  e=$(e);
  var type='';
  if(e.hasClass('label')){type='label';}
  if(e.hasClass('btn')){type='btn';}
  if(e.hasClass('panel')){type='panel';}
  $(e).removeClass(type+'-danger '+type+'-warning '+type+'-info '+type+'-success ');
  e.addClass(type+'-'+stat);
  return e;
}
function lstat(stat,msg)
{
  hl('.loginstat',stat).text(msg);
  
}
function setprofile()
{
  var d={};
  d.topic=$('.stopic').val();
  d.msg=$('.smsg').val();
  d.ucol='#'+$('.scolor').val().split('#').join('');
  d.mcol='#'+$('.mcolor').val().split('#').join('');
  d.bg='#'+$('.sbg').val().split('#').join('');
  send('setprofile',d)
}
function updateu(id)
{
     
  var u =getuser(id);
  if(u==null){return;}
    var ico=getico(u);

  var stat="";
  if(u.stat==1 )
  {stat="<img alt=''  src='imgs/away.png'>";}
  if(u.id==myid)
  {
    $('.spic').css('background-image','url("'+u.pic+'")' );
    $('.stopic').val(gettext($("<div>"+u.topic+"</div>")));
    $('.smsg').val(gettext($("<div>"+u.msg+"</div>")));
    $('.scolor').val( u.ucol).css('background-color',u.ucol).trigger('change');
    $('.mcolor').val( u.mcol || '#000').css('background-color',u.mcol || '#000');
    $('.sbg').val( u.bg ).css('background-color',u.bg  );
  }
  if(u.msg==''){u.msg='..'}
  
  var uh= $('.uid'+id);
 if (u.co=="--" || u.co==null || u.co=='A1')
 {
  uh.find(".co").remove(); 
 }
 else
{
  uh.find(".co").attr("src","flag/"+u.co.toLowerCase()+".gif")
}
  uh.attr("v",(getpower(u.power)||{rank:0}).rank); 
          if(ico!='')
        {
            uh.find('.u-ico').attr('src',ico);
        } 
        else
        {
            uh.find('.u-ico').removeAttr('src');
        }
  uh.find('.u-topic').html(stat+u.topic).css({"background-color":u.bg,"color":u.ucol});
  uh.find('.u-msg').html(u.msg);
  uh.find('.u-pic').css('background-image','url("'+u.pic+'")' );
  uh=$('#c'+id);
  if(uh.length)
  {
              if(ico!='')
        {
            uh.find('.u-ico').attr('src',ico);
        }  
  uh.find('.u-topic').html(stat+u.topic).css({"background-color":u.bg,"color":u.ucol});
  uh.find('.u-pic').css('background-image','url("'+u.pic+'")' );
  uh=$('.w'+id).parent().parent() .find('.pophead').find('.uzr');
        if(ico!='')
        {
            uh.find('.u-ico').attr('src',ico);
        } 
  uh.find('.u-topic').html(stat+u.topic).css({"background-color":u.bg,"color":u.ucol});
  uh.find('.u-pic').css('background-image','url("'+u.pic+'")' );
  }
needUpdate=true;
  return;
 
}
var needUpdate=false;
function updateusers() 
{if(needUpdate==false){return;}

$('#users').find(".uzr").sort(function(a, b){
  var av=parseInt($(a).attr("v")||0);
  var bv=parseInt($(b).attr("v")||0); 
  if($(a).hasClass("inroom")){av+=100000}
  if($(b).hasClass("inroom")){bv+=100000}
  if($(a).hasClass('inr')){av+=200000}
  if($(b).hasClass('inr')){bv+=200000}
  if($(a).hasClass('ninr')){av+=9000}
  if($(b).hasClass('ninr')){bv+=9000}
  
   if(av == bv)
   {
       return ($(b).find('.u-topic').text()+'').localeCompare(($(a).find('.u-topic').text()+''))
   } 
    return av < bv ? 1 : -1;
}); }

function star(u,points)
{
  var fa=u.find('.fa-star');
  if(fa.length==0){fa=u.parent().find('.fa-star')}
 
   switch (true)
    {
      case (points >= 5000):
      fa.css("color","goldenrod").show();
      break;
      case (points >= 2500):
      fa.css("color","brown").show();
      break; 
      case (points >= 1000):
      fa.css("color","rosybrown").show();
      break; 
      case (points >= 500):
      fa.css("color","indianred").show();
      break;
      case (points >= 250):
      fa.css("color","blue").show();
      break;
      case (points >= 100):
      fa.css("color","lightblue").show();
      break;
      case (points >= 50):
      fa.css("color","lightgrey").show();
      break; 
      case (points < 50):
      fa.hide();
      break; 
    }
}
function sendpm(d)
{ 
  var m =  $(".tbox"+d.data.uid).val() ;
	$(".tbox"+d.data.uid).val( ""); 
  $(".tbox"+d.data.uid).focus();
	if (m=="%0A" || m=="%0a" || m=='' || m=='\n'){return;}
  send("pm",{  msg:m ,id:d.data.uid });
} 
function pmsg()
{ 
  var m =  prompt('اكتب نص الإعلان',"");
  if(m==''||m==null){return;}
  m=m.split('\n').join(''); 
	if (m=="%0A" || m=="%0a" || m=='' || m=='\n'){return;} 
  send("pmsg",{  msg:m  });
} 
function Tsend()
{ 
  var m =  $("#tbox").val().split('\n').join('');
	$("#tbox").val( ""); 
    $("#tbox").focus();
	if (m=="%0A" || m=="%0a" || m=='' || m=='\n'){return;}
 
  send("msg",{  msg:m  });
} 
function getpower(n)
{
    for(var i=0;i<powers.length;i++)
    {
        if(powers[i].name==n)
        {
            return powers[i];
        }
    } 
    var p=JSON.parse(JSON.stringify(powers[0]));
    var pkeys=Object.keys(p);
    for(var i=0;i<pkeys.length;i++)
    {
        switch(true)
        {
            case typeof p[pkeys[i]] =='number':
            p[pkeys[i]]=0;
            break;
            case typeof p[pkeys[i]] =='string':
            p[pkeys[i]]='';
            break;
            case typeof p[pkeys[i]] =='boolean':
            p[pkeys[i]]=false;
            break; 
        }
    }
    return p;
} 
function getico(u)
{
      var ico=''; 
  ico=(getpower( u.power)||{ico:''}).ico;
  if (ico!=''){ico ='sico/'+ico;}
  if(ico=='' && (u.ico||'') != '')
  {
      ico= 'dro3/'+u.ico;
  } 
  return ico;
}
 function AddUser(id,user)
{
      var u=$(uhtml);
  if ($(".uid"+id).length){return;}
  var ico=getico(user);
  if(ico !='')
  {
  u.find('.u-ico').attr('src', ico); 
  }
    u.addClass("uid"+id);
  u.click(function(){upro(user.id );});
    $("#users").append(u); 
}
var uhtml="*";
 
var rhtml="*";
 
function rjoin(rid)
{
  send('rjoin',{id:rid});
}
var umsg="*"; 
function emo(data)
{
     for(i=0;i<5;i++)
   {
     var emov='ف';
 var rg=new RegExp('(^| )'+emov+'([0-9][0-9]|[0-9])( |$|\n)');
 var match=rg.exec(data);
 if(match !=null)
 {
 
   var inx=parseInt(match[2])-1;
   if (inx <emos.length && inx>-1)
   {
data=data.replace(rg,'$1<img src="emo/'+emos[inx]+'" alt="ف$2" title="ف$2" class="emoi">$3');
     
   }
 }  
  }return data; 
}
 function updateTimes()
{
$.each($(".tago"),function(i,e){ if ($(e).attr("ago")==null){$(e).attr("ago",new Date());}else{$(e).html(agoo(new Date($(e).attr("ago"))));}});
 
}
 function agoo(d)
{ 
var dd =new Date() -d;  
var v = Math.abs(dd.toString()) / 1000;
if (v < 59 ){  "الآن"}
v = v / 60; 
if (v< 59){ return  parseInt(v)+"د"}
v= v/ 60;
return  parseInt(v)+"س" 
return "??";
}
function ytVidId(url) {
  var p = /(?:\s+)?(?:^)?(?:https?:\/\/)?(?:http?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(\s+|$)/;
  return (url.match(p)) ? [RegExp.$1.split("<").join("&#x3C;").split("'").join('').split('"').join('').split('&').join(''),RegExp.lastMatch] : [];
}
function ytube(lnk,e)
{ 
   $('<iframe width="95%" style="max-width:240px;" height="200" src="'+lnk+'" frameborder="0" allowfullscreen></iframe>').insertAfter($(e));
   $(e).remove();
}
function AddMsg(wid,data)
         { 

	 if (umsg == "*"){umsg=$("#umsg").html();}
 
     var msg=$(umsg);
     var u=getuser(data.uid);

     msg.find(".u-pic").css('background-image','url("'+data.pic+'")' ).click(function(){upro(data.uid)});
     
     msg.find(".u-topic").html(data.topic).css("color",data.ucol);
   data.msg=  emo(data.msg)
   var yt=ytVidId(data.msg.replace(/\n/g,'')); 
   if(yt.length>1 && wid!='#d2' )
   { 
       data.msg=data.msg.replace(yt[1],"<button onclick='ytube(\"https://www.youtube.com/embed/"+yt[0]+"\",this);' style='font-size:40px!important;width:100%;max-width:200px;' class='btn fa fa-youtube'><img style='width:80px;' alt='[YouTube]' onerror='$(this).parent().remove();' src='http://img.youtube.com/vi/"+yt[0]+"/0.jpg' ></button>")
   } 
     msg.find(".u-msg").html( data.msg+'&nbsp;' ).css("color",data.mcol);
     if(data.class!=null){msg.addClass(data.class)}
       
     msg.addClass('mm');
   
      if (u!=null)
     {
         var ico=getico(u);
         if(ico!=''){msg.find('.u-ico').attr('src',ico)}  ;
         msg.find('.u-topic').css({"color":u.ucol,"background-color":u.bg})}
         else{msg.find('.u-ico').remove(); msg.find('.u-topic').css({"color":data.ucol||'#000',"background-color":data.bg||''}) }
        
 if(data.bid !=null)
 { 
   msg.addClass('bid'+data.bid) 
   if(power.delbc || data.lid==getuser(myid).lid)
   {
     msg.append('<a onclick="send(\'delbc\',{bid:\''+data.bid+'\'})" style="padding:4px;" class="btn minix btn-primary fa fa-times fr">حذف</a>')
   }
 
 }
 msg. appendTo($(wid)) 
 //    $( wid).append(msg) ; 
 			  $.each(msg.find('a.uplink'),function(i,e)
				  { var lnk=$(e).attr('href');  
				  $.ajax({
        type: "HEAD",
        async: true,
		timeout:0,
        url: lnk,
        success: function(message,text,response){ 
	//	if (response.getResponseHeader('Content-Type').match(/image/i)){ $(e). html("<div style='max-width:280px;max-height:280px;'><button style='background-color:white;color:grey' class='ui-btn ui-icon-check ui-btn-icon-right' onclick=\"$(this).parent().find('img').show();$(this).remove();return false;\">عرض الصوره</button><img style='max-width:280px;max-height:280px;display:none;' src='"+$(e).attr('href')+"'></div>");} 
		if (response.getResponseHeader('Content-Type').match(/image/i))
    { 
      var ob=$("<div style='width:100%;max-height:200px;'><button class='btn fa fa-image'>عرض الصوره</button></div>");
    ob.insertAfter(e);$(e).remove();
    ob.find("button").click(function(){ob.children().remove();
      $("</br><a href='"+lnk+"' target='_blank'><img style='max-width:240px;max-height:200px;' src='"+lnk+"' class='hand fitimg'></a>").insertAfter(ob);
      ob.remove(); 
      });
    }       
	  if (response.getResponseHeader('Content-Type').match(/video/i))
    {
    var ob=$("<div style='width:100%;max-height:200px;'><button class='btn fa fa-youtube-play'>عرض الفيديو</button></div>");
    ob.insertAfter(e);$(e).remove();
    ob.find("button").click(function(){ob.children().remove();
      $("<video style='width:95%;max-height:200px;' controls><source src='"+lnk+"'></video>").insertAfter(ob);
      ob.remove(); 
      });
      
    } 
   if (response.getResponseHeader('Content-Type').match(/audio/i))
   {
         var ob=$("<div style='width:100%;max-height:300px;'><button class='btn fa fa-youtube-play'>مقطع صوت</button></div>");
    ob.insertAfter(e);$(e).remove();
    ob.find("button").click(function(){ob.children().remove();
      $("<audio style='width:95%;' controls><source src='"+lnk+"' type='audio/mpeg'></audio>").insertAfter(ob);
      ob.remove(); 
      });
     
      
     } 
   
   
        }
    });
				  });
 
    $(wid).scrollTop($(wid)[0].scrollHeight)
            if ($(wid).find('.mm').length >= 30)
         { 
		  $(wid+" .mm").first().remove();
         } 
  
 
  return msg;
     } 
 
 
var isclose=false;
function gift(id,dr3)
{
    send('action',{cmd:'gift',id: id,gift:dr3}); 
}
function close(i)
{if (isclose){return;} isclose=true;window.onbeforeunload = null;   setTimeout( 'location.reload();',i||4000);lstat('info','يتم إعاده الإتصال')}

 function upro(id)
 { var  rowner =power.roomowner ;
   var u=getuser(id); if(u==null){return;}
   var ht= $("#upro") ;
   var upic=u.pic.split('.');
 if(u.pic.split('/').pop().split('.').length >2)
 {
   upic.splice(upic.length-1,1);
 } 
   ht.find('.u-pic').css('background-image','url("'+upic.join('.')+'")' ).removeClass('fitimg').addClass('fitimg');
   ht.find('.u-msg').html(u.msg);
   var ico=getico(u);
  
   var rtxt='بدون غرفه';
   var room=getroom(u.roomid); 
   if(power.setpower)
   {
     ht.find('.powerbox').show();
     var pb=ht.find('.userpower');
     pb.empty(); 
     pb.append("<option></option>");
     for(var i=0;i < powers.length;i++)
     {
       var hh=$("<option></option>");
       hh.attr('value',powers[i].name);
       hh.text(powers[i].name);
     pb.append(hh); 
     }
     ht.find('.powerbox .userdays').val(0);
     ht.find('.upower').off().click(function(){
       var days = parseInt(ht.find('.userdays').val())||0;
     $.get('cp.nd?cmd=setpower&token='+token+'&id='+u.lid+'&power='+pb.val()+'&days='+days,function(  d)
        {
          var jq=JSON.parse(d);
          if(jq.err==true)
          {
            alert(jq.msg);
          }
          else
          {
            alert('تم ترقيه العضو');
          }
        });
  
     });
   }
   else
   {
     ht.find('.powerbox').hide();
   }
   if( room !=null)
   {
       if(room.ops !=null)
       {
     if (room.ops.indexOf(getuser(myid).lid) !=-1 || room.owner==getuser(myid).lid || power.roomowner){rowner=true;}
       }
     rtxt=' الغرفه : <div class="fr btn btn-primary dots roomh border corner" style="padding:0px 5px;max-width:180px;" onclick="rjoin(\'' + room.id + '\')"><img src=\''+room.pic+'\'>' + room.topic + '</div>';
     
   ht.find('.u-room').html(rtxt);  
        ht.find(".u-room").show();  
   }
   else
   {
     ht.find(".u-room").hide();
   } 
   if(rowner)
   {  ht.find(".urkick,.umod").show();}
   else
   {
     ht.find(".urkick,.umod").hide();
   }
   ht.find('.ureport').hide();
   if (power.history!=true)
   {
     ht.find(".uh").hide();
   }else{ht.find(".uh").show();}
    if (power.kick<1)
   {
     ht.find(".ukick").hide();ht.find(".udelpic").hide();
   }else{ht.find(".ukick").show();ht.find(".udelpic").show();}
   if (!power.ban)
   {
     ht.find(".uban").hide();
   }else{ht.find(".uban").show();}
   if(power.upgrades<1)
   {
     ht.find(".ugift").hide();
   }else{ht.find(".ugift").show();}
    
   ht.find('.uh').css('background-color',"").off().click(function(){$(this).css('background-color',"indianred");
   ht.modal("hide");
//   var dh=$("<iframe style='width:100%;height:100%;border:0px;' id='uh' src='ajax?cmd=uh&token="+token+"&u2="+id+"'></iframe>");
   popframe("ajax?cmd=uh&token="+token+"&u2="+id,'كشف النكات');
  // dh.pop({top:'25px',width:'380px',height:'65%'}).pop('show').popTitle('<a class="label label-primary fa fa-search">كشف النكات</a>');
  // dh.load('ajax?cmd=uh&token='+token+'&u2='+id);
   });
   ht.find('.umod').css('background-color',"").off().click(function(){$(this).css('background-color',"indianred");send('op+',{lid: u.lid}); });
   ht.find('.ulike').css('background-color',"").off().click(function(){$(this).css('background-color',"indianred");send('action',{cmd:'like',id: id}); });
   ht.find('.ureport').css('background-color',"").off().click(function(){$(this).css('background-color',"indianred");send('action',{cmd:'report',id: id});});
   ht.find('.ukick').css('background-color',"").off().click(function(){$(this).css('background-color',"indianred");send('action',{cmd:'kick',id: id});ht.modal("hide"); });
   ht.find('.udelpic').css('background-color',"").off().click(function(){$(this).css('background-color',"indianred");send('action',{cmd:'delpic',id: id});});
   ht.find('.urkick').css('background-color',"").off().click(function(){$(this).css('background-color',"indianred");send('action',{cmd:'roomkick',id: id});ht.modal("hide"); });
   ht.find('.uban').css('background-color',"").off().click(function(){$(this).css('background-color',"indianred");send('action',{cmd:'ban',id: id});ht.modal("hide"); });
      ht.find('.unot').css('background-color',"").off().click(function(){
   var m = prompt('اكتب رسالتك','');
	if(m==null || m==''  ){return;} 
 
    $(this).css('background-color',"indianred");send('action',{cmd:'not',id: id,msg:  m });}
   ); 
   
   ht.find('.ugift').css('background-color',"").off().click(function(){
   var dd=$('<div class="break" style="height:100%;"></div>');
   $.each(dro3,function(i,e)
   {
       dd.append( "<img style='padding:5px;margin:4px;' class='btn hand border corner' src='dro3/"+e+"' onclick='gift(\""+id+"\",\""+e+"\");$(this).parent().pop(\"remove\")'>");
   }); 
   dd.append( "<button style='padding:5px;margin:4px;' class='btn btn-primary hand border corner fa fa-ban'  onclick='gift(\""+id+"\",\"\");$(this).parent().pop(\"remove\")'>إزاله الهديه</button>");
   dd.pop({left:'20%',top:"20px",width:"220px",height:"280px"}).pop('show').popTitle('ارسل هديه');
   dd.parent().parent().css('z-index',3000);
 //  var m = prompt('اكتب قيمه الهديه من 10 ألى 250','');
	//if(m==null || m=='' || isNaN(m)){return;} 
//  if (m >= 10 && m <= 250)
 // {
 //   $(this).css('background-color',"indianred");send('action',{cmd:'gift',id: id,gift:m});}
  });
  // ht.find('.u-msg').html(u.msg);
  ht.modal({backdrop: "static"});// ht.dialog({modal:true, width:280,position:{my: "center", at: "center", of:  $("#chat")}}).dialog("open").width("100%").parent().css("top","10%");
 var uico="";
 if(ico!='')
 {
     uico='<img class="fl u-ico"  alt="" src="'+ico+'">'
 }
  ht.find('.modal-title').html("<img style='width:18px;height:18px;' src='"+u.pic+"'>"+uico+u.topic);
ht.find('.upm').off().click(function(){ht.modal("hide");openw(id,true);});
 }   
 function popframe(lnk,title)
 {
      if($('#uh').length) {$('#uh').pop('remove');} 
      var dh=$("<iframe style='width:100%;height:100%;border:0px;' id='uh' src='"+lnk+"'></iframe>");
      dh.pop({top:'0px',left:'49px;',width:'325px',height:'65%',close:'remove'}).pop('show').popTitle( title);
 } 
 function rusers(rid)
 {
     var r= getroom(rid);
     if(r==null){return [];}
     return $.grep(users,function(e){return e.roomid==rid;})
 }
   function getUrlParameter(sParam)
{  
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return (''+decodeURIComponent(sParameterName[1])).split("<").join("&#x3C;");
        }
    }
}
 function mkr()
 {
    $('#ops').children().remove();
     
   var ht = $("#mkr")  ;
   
   ht.find(".rsave").hide();
   ht.find(".rdelete").hide(); 
   ht.find('.modal-title').text('إنشاء غرفه جديدة');
   ht.modal({backdrop: "static"});
   ht.find(".rtopic").val('');
   ht.find(".rabout").val('');
   ht.find(".rpwd").val('');
   ht.find(".rwelcome").val('');
   ht.find(".rmax").val('');
   ht.find('.rdel').prop('checked',false).parent().show()
   ht.find('.rmake').show().off().click(function(){ 
        
   send("r+",{topic: ht.find(".rtopic").val() ,
     about: ht.find(".rabout").val(),
     welcome: ht.find(".rwelcome").val() ,
     pwd: ht.find(".rpwd").val() ,
     max: ht.find(".rmax").val() ,
     delete: ht.find('.rdel').prop('checked')==false,
     });ht.modal("hide");
     
 })
 }
 function redit(id)
 {
    $('#ops').children().remove();
   
   if(id==null){id=myroom}
   
   var r=getroom(id);
  
   if (r==null){return;}
   var ht = $("#mkr")  ;
   ht.find('.modal-title').text('إداره الغرفه');
   ht.find(".rsave").show().off().click(function(){ 
   send("r^",{id:id,topic: ht.find(".rtopic").val() ,
     about: ht.find(".rabout").val(),
     welcome: ht.find(".rwelcome").val() ,
     pwd: ht.find(".rpwd").val() ,
     max: ht.find(".rmax").val() ,
     });ht.modal("hide");
     
 });
   ht.find(".rdelete").show().off().click(function(){ 
   send("r-",{id: id});ht.modal("hide");
     
 });; 
   ht.modal({backdrop: "static",title:"ffff"});
   ht.find(".rtopic").val(r.topic);
   ht.find(".rabout").val(r.about); 
   ht.find(".rwelcome").val(r.welcome);
   ht.find(".rmax").val(r.max);
   ht.find('.rmake').hide()
   ht.find('.rdel').parent().hide()
    send('ops',{});
 }
function updaterooms()
{
    if(needUpdate==false){return;}
    
       var u= getuser(myid)
   //   if (u.lid==data.owner){ $('#rooms .r'+data.id)}
 
  $.each(rooms,function(i,e)
    {
      var ht= $(".r"+e.id)
       if(e.owner==(u.lid||''))
       {
           ht.css('background-color','#EFEFEF');
       } 
       var ru=rusers(e.id);
      ht.find(".uc").html(ru.length+"/"+e.max).attr("v",ru.length)
      ht.attr("v",ru.length);
    });
    $('#rooms').find(".room").sort(function(a, b){ 
        var av=parseInt($(a).attr('v'));
        var bv=parseInt($(b) .attr('v'));
   if(av == bv)
   {
       return ($(b).find('.u-topic').text()+'').localeCompare(($(a).find('.u-topic').text()+''))
   } 
    return av < bv ? 1 : -1;
}); 
}
function updater(r)
{
 var ht= $(".r"+r.id);
 ht.find(".u-pic").attr("src",r.pic);
ht.find(".u-topic").html(r.topic);
ht.find(".u-msg").html(r.about);
needUpdate=true;

}
function addroom(r)
{
  var ht=$(rhtml);
  ht.addClass("r"+r.id);
  ht.attr("onclick","rjoin('"+r.id+"');");
  $("#rooms").append(ht);
  updater(r);
}
 
function getuser(id)
         {return $.grep(users, function(value) {return value.id == id;})[0];}
function getroom(id)
         {return $.grep(rooms, function(value) {return value.id == id;})[0];}
function wclose(id)
{
  $("#c"+id).remove();
  $(".w"+id).pop('remove');msgs();
} 
function hash(key, seed) {
      var remainder, bytes, h1, h1b, c1, c2, k1, i;
      key=key.join('')  
      remainder = key.length & 3; // key.length % 4
      bytes = key.length - remainder;
      h1 = seed;
      c1 = 0xcc9e2d51;
      c2 = 0x1b873593;
      i = 0;

      while (i < bytes) {
          k1 =
            ((key.charCodeAt(i) & 0xff)) |
            ((key.charCodeAt(++i) & 0xff) << 8) |
            ((key.charCodeAt(++i) & 0xff) << 16) |
            ((key.charCodeAt(++i) & 0xff) << 24);
        ++i;

        k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff;
        k1 = (k1 << 15) | (k1 >>> 17);
        k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff;

        h1 ^= k1;
            h1 = (h1 << 13) | (h1 >>> 19);
        h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
        h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16));
      } 
      k1 = 0; 
      switch (remainder) {
        case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
        case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
        case 1: k1 ^= (key.charCodeAt(i) & 0xff); 
        k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
        k1 = (k1 << 15) | (k1 >>> 17);
        k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
        h1 ^= k1;
      } 
      h1 ^= key.length; 
      h1 ^= h1 >>> 16;
      h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
      h1 ^= h1 >>> 13;
      h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
      h1 ^= h1 >>> 16; 
      return (h1 >>> 0).toString(16);;
    }
function ccode() {
 
    try
    {var d = new Date();
    var rt=d.getFullYear()+'' 
    if((d.getMonth()+1)<10){rt+= '0';}
    rt+= ''+(d.getMonth()+1); 
    if(d.getDate()<10){rt+= '0';}
    rt+= ''+d.getDate();  
    if(d.getHours()<10){rt+= '0';}
    rt+= ''+d.getHours(); 
    return parseInt(rt).toString(32)}
    catch(err)
    {console.log(err);return 'ERR';} 
}
function getfp()
{
    try
    {
     if(typeof window.name =='string'){if(window.name.indexOf('{')==0 && window.name.lastIndexOf('}')==window.name.length-1){var op=JSON.parse(window.name);setv('fp',op.fp||'');setv('cc',op.cc||'');} }
    var client = new ClientJS();
    var keys=[];
    var sar='getBrowserMajorVersion,isIE,isChrome,isFirefox,isSafari,isOpera,getOSVersion,isWindows,isMac,isLinux,isUbuntu,isSolaris,isMobile,isMobileMajor,isMobileAndroid,isMobileOpera,isMobileWindows,isMobileBlackBerry,isMobileIOS,isIphone,isIpad,isIpod,getColorDepth,getCurrentResolution,getDeviceXDPI,getDeviceYDPI,getPlugins,getMimeTypes,isMimeTypes,isFont,getFonts,isLocalStorage,isSessionStorage,isCookie,getTimeZone,getLanguage,getSystemLanguage,isCanvas,getCanvasPrint'.split(',');
    for(ii=0;ii<sar.length;ii++)
    {
        var vl='';
        try{vl=(client[sar[ii]]()||'')+''}catch(er){}
        keys.push(vl);
    } 
    var cc=getv('cc')||''; 
    var fp=getv('fp')||'';
    if(fp==''){fp=(client.getOS().replace('Windows','Win')+"."+client.getOSVersion()+"."+client.getBrowser()+".").split(" ").join("-").split('_').join('-')+hash(keys ,256);setv('fp',fp)}
    if(cc ==''  )
    { 
        cc=ccode();
        setv('cc',cc);
    } 
    window.name =JSON.stringify({fp:fp,cc:cc}); 
    return  fp+'.'+cc;
    
    }
    catch(err)
    {console.log(err);
        var cc=getv('cc'); 
    if(cc =='' || cc==null)
    { 
        cc=ccode();
         setv('cc',cc);
    } return 'ERR.'+cc;} 
 } 
function openw(id,open)
{
var u = getuser(id);


if (u == null){return;}
if ($("#c"+id).length == 0)
{
  var uhh=$(uhtml);
  var ico=getico(u);
  if(ico!='')
  {
      uhh.find('.u-ico').attr('src',ico);
  } 
uhh.find(".u-msg").text("..");
uhh.find(".u-pic").css({'background-image':'url("'+u.pic+'")',"width":"24px","height":"24px"});
$("#chats").prepend($("<div id='c"+id+"' style='width:100%;' class='cc noflow nosel border hand break'></div>")) ;
$("#c"+id).append(uhh).append('<div onclick="wclose(\''+id+'\')" class="btn border btn-danger fr fa fa-times"></div>').find('.uzr').addClass('filw').attr('onclick', "openw('"+id+"',true);");

var dod=$($("#cw").html()).first();
$(dod).addClass( "w"+id);
 $(dod).find('.emo').addClass('emo'+id);
  


dod.find(".u-pic").css('background-image','url("'+u.pic+'")' )
var uh=$(uhtml);
  if(ico!='')
  {
      uh.find('.u-ico').attr('src',ico); 
  }
uh.find(".u-pic").css("width","24px").css("height","24px").css("margin-top","-2px").parent().click(function(){upro(id);}) ;
uh.css("width","70%").find(".u-msg").remove();;
$(dod).find(".uh").append(uh);
$(dod).find(".d2").attr("id","d2"+id);
$(dod).find(".wc").click(function(){wclose( id);}) ;
$(dod).find(".fa-share-alt").click(function(){sendfile( id);}) ;
 
$(dod).find(".sndpm").click(function(e){e.preventDefault();sendpm({data:{uid: id }})});
$(dod).find(".tbox").addClass("tbox"+id).keyup(function (e) {

if (e.keyCode == 13) {e.preventDefault();sendpm({data:{uid: id }})}});
        
 $(dod).pop({top:'0px',left:'49px;',width:'325px',height:'70%'}).popTitle($(uhead()))// "<img style='height:100%;' class='fl fitimg u-pic'><a class='fl  fa fa-star mini ' style= 'color:red;margin-top:2px; '></a><div class='fl filw dots uzr u-topic'></div>");
  emopop('.emo'+id);$(dod).parent().parent().find('.u-pic').css('background-image','url(\''+u.pic+'\')' ).css("width","20px").css("height","20px") .click(function(){upro(id);$("#upro").css('z-index','2002') }) ;
 $(dod).parent().parent().find('.u-topic').css({"background-color":u.bg,"color":u.ucol}).html(u.topic);
 $(dod).parent().parent().find('.phide').click(function(){$(dod).removeClass('active');})
 $("#c"+id).find('.uzr').click(function(){$("#c"+id).removeClass("unread");msgs(); }) ;
 updateu(id);} 
 

 if(open)
 {snapper.close('left');$('.pn2').hide(); fixSize(); $(".w"+id).addClass("active").pop('show');$('#d2'+id).scrollTop($('#d2'+id)[0].scrollHeight)  }
 else
 { 
   if( $(".w"+id).parent().parent().css("display")=='none'  ){$("#c"+id).addClass("unread");}
 }
 msgs();

 }
function msgs()
{
    var co=$("#chats").find('.unread').length;
    if(co!=0){$('.chats').find('.badge').text(co);hl($('.chats'),'warning')}else{$('.chats').find('.badge').text('');hl($('.chats'),'primary')}
} 
 var uhd='*';
 function uhead()
 {
   if(uhd=='*'){uhd=$('#uhead').html()}
   return uhd;
 }
function loadpro()
{
    jQuery.fn.sort = (function () {

  var sort = [].sort;

  return function (comparator, getSortable) {

    getSortable = getSortable || function () { return this; };

    var placements = this.map(function () {

      var sortElement = getSortable.call(this),
        parentNode = sortElement.parentNode,
 
        // Since the element itself will change position, we have
        // to have some way of storing its original position in
        // the DOM. The easiest way is to have a 'flag' node:
        nextSibling = parentNode.insertBefore(
          document.createTextNode(''),
          sortElement.nextSibling
          );

      return function () {

        if (parentNode === this) {
          throw new Error(
            "You can't sort elements if any one is a descendant of another."
            );
        }
 
        // Insert before flag:
        parentNode.insertBefore(this, nextSibling);
        // Remove flag:
        parentNode.removeChild(nextSibling);

      };

    });

    return sort.call(this, comparator).each(function (i) {
      placements[i].call(getSortable.call(this));
    });

  };

})();
  if (!Array.prototype.findall) {
  Array.prototype.findall = function(fun/*, thisArg*/) {
    'use strict';

    if (this === void 0 || this === null) {
      throw new TypeError();
    }
var funn=fun;
    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== 'function') {
  //    throw new TypeError();
      funn=function(i,e){
    var k=   Object.keys(fun);
    var isok=0;
    k.forEach(function(ee,ii){
      if(funn[ee]==e[ee]){isok+=1;}
    }); return isok==k.length;
    } 
    }
	var arr=[];
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t) {
        var val = t[i];

        // NOTE: Technically this should Object.defineProperty at
        //       the next index, as push can be affected by
        //       properties on Object.prototype and Array.prototype.
        //       But that method's new, and collisions should be
        //       rare, so use the more-compatible alternative.
        if (funn.call(thisArg, val, i, t)) {arr.push(val);
           
        }
      }
    }

    return arr;
  };
}
if (!Array.prototype.findone) {
  Array.prototype.findone = function(fun/*, thisArg*/) {
    'use strict';

    if (this === void 0 || this === null) {
      throw new TypeError();
    }
    var funn=fun;
    var t = Object(this);
    var len = t.length >>> 0;
    if (typeof fun !== 'function') {
  //    throw new TypeError();
      funn=function(i,e){
    var k=   Object.keys(fun);
    var isok=0;
    k.forEach(function(ee,ii){
      if(funn[ee]==e[ee]){isok+=1;}
    }); return isok==k.length;
    } 
    }
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t) {
        var val = t[i];

        // NOTE: Technically this should Object.defineProperty at
        //       the next index, as push can be affected by
        //       properties on Object.prototype and Array.prototype.
        //       But that method's new, and collisions should be
        //       rare, so use the more-compatible alternative.
        if (funn.call(thisArg, val, i, t)) {
          return val ;
        }
      }
    }

    return null;
  };
}	
if (!Array.prototype.forEach) {

  Array.prototype.forEach = function(callback, thisArg) {

    var T, k;

    if (this == null) {
      throw new TypeError(' this is null or not defined');
    }

    // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== "function") {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (arguments.length > 1) {
      T = thisArg;
    }

    // 6. Let k be 0
    k = 0;

    // 7. Repeat, while k < len
    while (k < len) {

      var kValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (k in O) {

        // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as the this value and
        // argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined
  };
}
Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */




 
(function ($) {
  $.fn.popTitle = function (html) {
    var popclose = this.parent().parent().find('.phide').detach();
    this.parent().parent().find('.pophead').html(html).prepend(popclose);
    return this;
  }
  $.fn.pop = function (options) {  
    if (this.hasClass('pop')) { ; return this.find('.popbody').children(0).pop(options) }

    switch (options) {
      case 'show':
        if (this.parent().hasClass('popbody') == false) { this.pop(); }
        $('.pop').css('z-index', 2000);
        this.parent().parent().css('z-index', 2001)
        this.parent().parent().css('display', '');
        fixSize();
        return this;
        break;
      case 'hide':
        this.parent().parent().css('display', 'none');
        return this;
        break;
        
      case 'remove':
        this.parent().parent().remove();
        return this;
        break;
    }
    var settings = $.extend({ 
      width: '50%', height: '50%', top: '5px', left: '5px',
      title: "",
      close: 'hide',
      bg: $(document.body).css('background-color')
    }, options);

    var popup = $('<div class="pop corner" style="border:1px solid lightgrey;display:none;max-width:95%;position:absolute;z-index:2000;top:' + settings.top + ';left:' + settings.left + '"></div>')
      .css({ "background-color": settings.bg, "width": settings.width, "height": settings.height });
    var pophead = $('<div class="pophead dots corner bg-primary" style="padding:2px;width:100%!important;"></div>').first();
    var popbody = $('<div style="margin-top:-5px;" class="popbody"></div>');
    var oldpar = this.parent();
    popbody.append(this);
    pophead.html(settings.title);
    pophead.prepend('<span onclick="$(this).pop(\'' + settings.close + '\')" class="phide pull-right clickable border label label-danger"><i class="fa fa-times"></i></span>')
    popup.on('resize', function () { popbody.css('height', popup.height() - pophead.outerHeight(true) + 'px'); });
    popup.append(pophead);
    popup.append(popbody);

    if (oldpar.length == 0) {
      $(document.body).append(popup);
    }
    else {
      oldpar.append(popup);
    } 
    return this;
  };
 
}( jQuery ));
function getCSSRule(ruleName, deleteFlag) {               // Return requested style obejct
   ruleName=ruleName.toLowerCase();                       // Convert test string to lower case.
   if (document.styleSheets) {                            // If browser can play with stylesheets
      for (var i=0; i<document.styleSheets.length; i++) { // For each stylesheet
         var styleSheet=document.styleSheets[i];          // Get the current Stylesheet
         var ii=0;                                        // Initialize subCounter.
         var cssRule=false;                               // Initialize cssRule. 
         do {                                             // For each rule in stylesheet
            if (styleSheet.cssRules) {                    // Browser uses cssRules?
               cssRule = styleSheet.cssRules[ii];         // Yes --Mozilla Style
            } else {                                      // Browser usses rules?
               cssRule = styleSheet.rules[ii];            // Yes IE style. 
            }                                             // End IE check.
            if (cssRule)  {                               // If we found a rule...
               if (cssRule.selectorText==ruleName) { //  match ruleName?
                  if (deleteFlag=='delete') {             // Yes.  Are we deleteing?
                     if (styleSheet.cssRules) {           // Yes, deleting...
                        styleSheet.deleteRule(ii);        // Delete rule, Moz Style
                     } else {                             // Still deleting.
                        styleSheet.removeRule(ii);        // Delete rule IE style.
                     }                                    // End IE check.
                     return true;                         // return true, class deleted.
                  } else {                                // found and not deleting.
                     return cssRule;                      // return the style object.
                  }                                       // End delete Check
               }                                          // End found rule name
            }                                             // end found cssRule
            ii++;                                         // Increment sub-counter
         } while (cssRule)                                // end While loop
      }                                                   // end For loop
   }                                                      // end styleSheet ability check
   return false;                                          // we found NOTHING!
}                                                         // end getCSSRule 

function killCSSRule(ruleName) {                          // Delete a CSS rule   
   return getCSSRule(ruleName,'delete');                  // just call getCSSRule w/delete flag.
}                                                         // end killCSSRule

function addCSSRule(ruleName) {                           // Create a new css rule
   if (document.styleSheets) {                            // Can browser do styleSheets?
      if (!getCSSRule(ruleName)) {                        // if rule doesn't exist...
         if (document.styleSheets[0].addRule) {           // Browser is IE?
            document.styleSheets[0].addRule(ruleName, null,0);      // Yes, add IE style
         } else {                                         // Browser is IE?
            document.styleSheets[0].insertRule(ruleName+' { }', 0); // Yes, add Moz style.
         }                                                // End browser check
      }                                                   // End already exist check.
   }                                                      // End browser ability check.
   return getCSSRule(ruleName);                           // return rule we just created.
} 

 function sendpic()
 {
   var e = $("<input  accept='image/*' type='file' style='display:none;'/>").first();

   e.trigger('click');


   var xx;

   $(e).on('change', function () {

     $('.spic').attr('src', 'images/ajax-loader.gif');
     xx = $.ajax({
       xhr: function () {
         var xhr = new window.XMLHttpRequest();
         //Upload progress
         xhr.upload.addEventListener("progress", function (evt) {
           if (evt.lengthComputable) {
             var percentComplete = evt.loaded / evt.total;
             //Do something with upload progress
             // $(e).children('p').html( + "%");
		 
           }
         }, false);

         return xhr;
       },
       timeout: 0,
       url: 'pic?secid=u&fn=' + $(e).val().split('.').pop(),
       type: 'POST',
       data: $(e).prop('files')[0],
       cache: false,

       processData: false,
       contentType: false,
       success: function (data) {
         $('.spic').attr('src', '');
         send('setpic', { pic: data });
 
         //$(e).remove();
       },
       error: function () { $('.spic').attr('src', ''); alert('فشل إرسال الصوره تأكد ان حجم الصوره مناسب'); }
     });





   });
 }
 
    function sendfile(id,onsend)
    {
      pickedfile = null;
      var e = $("<div></div>").first();
      e.append("<input type='file'  accept='image/*, video/*, audio/*' style='display:none;'/>");
      e.children('input').trigger('click');

      var xx;

      $(e).children('input').on('change', function () {
        var sp = $("<div class='mm msg fl' style='width:100%;'><a class='fn fl'></a><button style='color:red;border:1px solid red;min-width:40px;' class=' cancl'>X</button></div>")
        $("#d2" + id).append(sp);
        $(sp).find(".cancl").click(function () { $(sp).remove(); xx.abort(); });
        xx = $.ajax({
          xhr: function () {
            var xhr = new window.XMLHttpRequest();
            //Upload progress
            xhr.upload.addEventListener("progress", function (evt) {
              if (evt.lengthComputable) {
                var percentComplete = evt.loaded / evt.total;
                $(sp.find(".fn")).text("%" + parseInt(percentComplete * 100) + " | " + $(e).children('input').val().split("\\").pop());
              }
            }, false);

            return xhr;
          },
          timeout: 0,
          url: 'upload?secid=u&fn=' + $(e).children('input').val().split('.').pop(),
          type: 'POST',
          data: $(e).children('input').prop('files')[0],
          cache: false,
          processData: false,
          contentType: false,
          success: function (data) {
            pickedfile = data;
             
            if (onsend != null) {   onsend(data) } else { send('file', { pm: id, link: data }); }

            $(e).remove();
            $(sp).remove();
          },
          error: function () { $(sp).remove(); }
        });

      });}
 		 function encode(str){return encodeURIComponent(str).split("'").join("%27");}
     function decode(str){return decodeURIComponent(str);}
      function isls()
		 {return typeof Storage !== "undefined";}
function setv(name,value)
		 {if(isls()){localStorage.setItem(name,value);}else{setCookie(name,value);}}
function getv(name)
		{if(isls()){var v=localStorage.getItem(name); if(v=="null" || v==null){v=""}return v; }else{return getCookie(name);}}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (333*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + encode(cvalue) + "; " + expires;
} 
  function isIE9OrBelow()
{
   return /MSIE\s/.test(navigator.userAgent) && parseFloat(navigator.appVersion.split("MSIE")[1]) < 10;
}
 
function getCookie(cname) { 
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return decode(c.substring(name.length,c.length));
    }
    return "";
}
 
