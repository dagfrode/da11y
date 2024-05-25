import React from 'react';
import Control from './Control';

class App extends React.Component {

  constructor(props: any) {
    super(props);
    const baseFontSize = parseInt(
      getComputedStyle(document.documentElement, null)["font-size"]
    );

    this.state = { controlsOpen  :true, fontScale: 100, baseFontSize };
  }


    componentDidMount() {
      document.addEventListener('wheel', this.handleKeyDown);
      document.addEventListener('keyup', this.handleKeyUp);

 }

// TODO - show feedback in main window
// fill out the rest of the checklist from the video
  
    handleKeyDown = (event: WheelEvent) => {
      if (!event.shiftKey) return;
      event.preventDefault();
      
      let scale = this.state.fontScale
      if (event.wheelDelta > 0) {
        scale += 25;
      } else {
        scale -= 25;
      }
      
      this.setState({...this.state, fontScale: scale})
      
      console.log("Font scale", (this.state.baseFontSize * scale) / 100 + "px");


         document.documentElement.style.fontSize = (this.state.baseFontSize * scale) / 100 + "px";
        
        // el.innerHTML = `${scaling.toString()}%`;
        // document.body.appendChild(el);
        // timer = Date.now();
        // setTimeout(() => {
        //   if (Date.now() - timer > 800 && document.body.contains(el)) {
        //     document.body.removeChild(el);
        //   }
        // }, 1000);
    
      }

    

      handleKeyUp=(event: KeyboardEvent) =>{
        console.log('Key pressed: ', event.key, event.ctrlKey, event.shiftKey);
        if(event.ctrlKey && event.shiftKey && event.key === "U"){
          this.setState({...this.state,controlsOpen: !this.state.controlsOpen})
        }
  
      }
  
    render() {
      return <div>Press any key!
       { this.state.controlsOpen && <Control />}
      </div>;
    }

 
  }



export default App
