import { Output, Input } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { OnInit, Component} from "@angular/core";

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    @Output() menuToggle = new EventEmitter();
    @Input() opened: boolean = false;


    constructor() {
    }

    ngOnInit(): void {
    }

    toggle() {
        this.opened = !this.opened;
        this.menuToggle.emit(this.opened);
        console.log('2');
        console.log(this.menuToggle);
    }
}