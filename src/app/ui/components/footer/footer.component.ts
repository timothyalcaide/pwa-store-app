import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark fixed-bottom">
      <div class="navbar-text m-auto text-white">
        Copyright &copy; {{ date }}
      </div>
    </nav>
  `,
  styles: [],
})
export class FooterComponent implements OnInit {
  date: number;

  constructor() {}

  ngOnInit(): void {
    this.date = new Date().getFullYear();
  }
}
