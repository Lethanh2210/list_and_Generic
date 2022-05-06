import {Student} from "./Student";
import {ClassScore} from "./ClassScore";

let classScore = new ClassScore();
classScore.insertFirst('Thinh', 9);
classScore.insertLast('Thanh',8);
classScore.insertFirst('Phu',10);
classScore.insertFirst('Hai',4);
classScore.showList();
classScore.findByName('nh');