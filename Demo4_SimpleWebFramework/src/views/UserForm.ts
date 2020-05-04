import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User,UserProps>{
 
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAge,
      "click:.set-name": this.onSetName,
      "click:.save-model": this.onSaveModel,
    };
  }

  onSetAge = (): void => {
    this.model.setRandomnAge();
  };

  onSetName = (): void => {
    const input = this.parent.querySelector("input");
    if( input ){
      const name = input.value;
      this.model.set({ name });
    }
    
  };

  onSaveModel = ():void =>{
    this.model.save();
  }

  template(): string {
    console.log("render userForm");
    return `
        <div>
        <input placeholder="${this.model.get('name')}"/>
        <button class="set-name">Set Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-model">save</button>
        </div>
       
      `;
  }

 
}
