function externalLinks() {
 if (!document.getElementsByTagName) return;
 var anchors = document.getElementsByTagName("a");
 for (var i=0; i<anchors.length; i++) {
   var anchor = anchors[i];
   if (anchor.getAttribute("href") &&
       anchor.getAttribute("rel") == "external")
     anchor.target = "_blank";
 }
}
window.onload = externalLinks;

function checkHuman(form){

  var n = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  var s = ["+","-","*"];

  var getR = function(max){
    var r = Math.round(Math.random()* max);
    r = (r<0)?0:(r>max)?max:r;
    return r;
  }
   var r1 = getR(9);
   var r3 = getR(9);
   var r2 = getR(2);
   var res = prompt("How much is " + n[r1]+ " " + s[r2] + " " +  n[r3] + "?\n\n (plz give a numeric answer e.g. 3 or -4)");

   if(!res){
       return;
   }
   r = (eval(r1 + s[r2] + r3));
   if(r==res){
       form.action += "?ok=ok";
       form.submit();
   }else{
       checkHuman(form);
   }
}


/*
var Ajax = function(){

    var timedOut = false;

    var xhr = function(){

        if(XMLHttpRequest){
          return new XMLHttpRequest();
        }else if (ActiveXObject){
          return new ActiveXObject("Microsoft.XMLHTTP");
        }

        return null;
    }();

    var requestOk = function(){
        try{
           return  xhr.status > 200 && xhr.status < 300 ||
                   xhr.status === 304 ||
                   navigator.userAgent.indexOf("Safari") >-1
        }catch(e){}

        return false;
    }

    var setRequestTimeOut = function(len){
        var millisec = len || 5000
        setTimeout(
          function(){
              timedOut = true;
          },millisec
        );
    }

    var getData = function(type){

        var ct = xhr.getResponseHeader('content-type');
        var data = !type && ct && ct.indexOf('xml') !== -1;
        return (type === 'xml' || data) ? xhr.responseXml : xhr.responseText;

    }



    return {

        request : function(opts){
            //set the timeout
            setRequestTimeOut(opts.timeOut);

            xhr.open(opts.type,opts.url + "?" + opts.data,true);

            xhr.onreadystatechange = function(){
                // Wait until the data is fully loaded
                if ( xhr.readyState == 4 ) {
                    var res = getData(opts.dataType);

                    opts.callBack(res);

                   xhr = null;
                }
            }
            xhr.send("");
        }

    }

}();

Ajax.request({
    type:'GET',
    url:'http://useragentstring/index.php',
    callBack:callBack,
    data:'uas=Mozilla/5.0 (X11; U; Linux i686; de; rv:1.9.1.7) Gecko/20100106 Ubuntu/9.10 (karmic) Firefox/3.5.7&getJSON=all',
    timeOut:2000
});

function callBack(data){

  var browser = eval("("+data+")");
  alert(browser.agent_type);
  var asg = 'Der UAS:\n\n';
  for(var i in browser){
      asg += i + " : " + browser[i] + "\n";
  }
  alert(asg);
}

*/