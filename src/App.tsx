import React from 'react'

class App extends React.Component {
    componentDidMount() {
      document.addEventListener('wheel', this.handleKeyDown);
      document.addEventListener('keyup', this.handleKeyUp);
    }
  
    handleKeyDown(event: WheelEvent) {
        console.log('Key pressed: ', event.shiftKey);
        // if (!e.shiftKey) return;
        // e.preventDefault();
    
        // if (e.wheelDelta > 0) {
        //   scaling += 25;
        // } else {
        //   scaling -= 25;
        // }
        // el.innerHTML = `${scaling.toString()}%`;
        // document.body.appendChild(el);
        // timer = Date.now();
        // setTimeout(() => {
        //   if (Date.now() - timer > 800 && document.body.contains(el)) {
        //     document.body.removeChild(el);
        //   }
        // }, 1000);
    
        // document.documentElement.style.fontSize = (baseFontSize * scaling) / 100 + "px";
      }

      handleKeyUp(event: KeyboardEvent) {
        console.log('Key pressed: ', event.key, event.ctrlKey, event.shiftKey);
        // if (!e.shiftKey) return;
        // e.preventDefault();
    
        // if (e.wheelDelta > 0) {
        //   scaling += 25;
        // } else {
        //   scaling -= 25;
        // }
        // el.innerHTML = `${scaling.toString()}%`;
        // document.body.appendChild(el);
        // timer = Date.now();
        // setTimeout(() => {
        //   if (Date.now() - timer > 800 && document.body.contains(el)) {
        //     document.body.removeChild(el);
        //   }
        // }, 1000);
    
        // document.documentElement.style.fontSize = (baseFontSize * scaling) / 100 + "px";
      }
  
    render() {
      return <div>Press any key!</div>;
    }
  }



export default App
