import Loadable from 'react-loadable';
import React from 'react'; 

const LoadableComponent = Loadable({
  //异步加载当前目录下的index组件
  loader: () => import('./'),
  //加载时临时显示的组件
  loading(){
  	return <div>detail页面正在缓存中</div>
  }
});

//返回一个无状态组件LoadableComponent
export default ()=><LoadableComponent/>
