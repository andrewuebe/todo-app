import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Todo} from '../../Todo';

@Component({
  selector: 'app-feelings',
  templateUrl: './feelings.component.html',
  styleUrls: ['./feelings.component.css']
})
export class FeelingsComponent implements OnInit {
  @Input() feeling!: string;
  @Output() onFeelingSelection: EventEmitter<string> = new EventEmitter();

  isClicked: boolean = false;
  curFeeling: string = "smile";

  constructor() { }

  ngOnInit(): void {
    this.curFeeling = this.getEmojiStr(this.feeling);
  }

  toggleOpenFeelingOptions(){
    this.isClicked = !this.isClicked;
  }

  handleFeelingSelection(event: any){
    var selectedFeeling: string = event.srcElement.id;
    if (event.srcElement.localName === "span"){
      selectedFeeling = event.srcElement.offsetParent.id;
    }
    console.log(selectedFeeling);
    this.curFeeling = this.getEmojiStr(selectedFeeling);
    this.onFeelingSelection.emit(selectedFeeling);
  }

  getEmojiStr(feeling: string) {
    var emojiStr: string = "smile";
    if(feeling === "angry"){ emojiStr = "rage"; }
    if(feeling === "hurry"){ emojiStr = "stopwatch"; }
    if(feeling === "undefined"){ emojiStr = "question"; }
    return emojiStr;
  }

}
