import types from './types'

const actions = {
    acyncIncrement({
        commit,
        state
      }){
        var p = new Promise((resolve,reject)=>{
          // 模拟一个异步请求
          setTimeout(() => {
            resolve()
          }, 1000);
        });
        p.then(resolve=>{
          commit(types.INCREMENT)
        },reject=>{
          console.log('异步请求错误');
        })
      }
}

export default actions;