
function load_SE_widget(widget_id){
  window.SE.ready(()=>{
    widget = window.SE.widget(widget_id);
  });
}

function drop_SE_widget(widget_id){
  window.SE.widgets.pop();
}

