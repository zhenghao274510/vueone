export default{
  setFont(){
    let new_w=document.documentElement.clientWidth||document.body.clientWidth;
    let ui_w=320;
    document.documentElement.style.fontSize=(new_w/ui_w)*100+'px';
  }
}
