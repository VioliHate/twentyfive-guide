import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {User} from "../../models/example-model";
import {Header, SortEvent} from "twentyfive-accordion-table";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-accordion-table-page',
  templateUrl: './accordion-table-page.component.html',
  styleUrl: './accordion-table-page.component.scss'
})
export class AccordionTablePageComponent implements OnInit{

  @ViewChild('templateRef', { static: true }) templateRef!: TemplateRef<any>;

  data:User [] = [];
  headers: Header[] = [];
  extras: Header[] = [];
  deepDisplay: Header[] = [];
  dataDetails: any [] = [new User()];
  pageSize: number = 4;
  page:number = 1;
  maxSize: number = 5;
  collectionSize!: number;
  loading: boolean = false;
  installLib:any = 'npm i twentyfive-accordion-table';
  importModule:any = 'import { TwentyfiveAccordionTableModule } from \'twentyfive-accordion-table\';' +
    '\n' +
    '\n@NgModule({\n' +
    'imports: [' +
    'TwentyfiveAccordionTableModule' +
    ']';

  tagHtmlComponent:any = '<twentyfive-accordion-table></twentyfive-accordion-table>';
  exportSortDirection:any = 'export declare enum SortDirection {\n' +
    '    ASCENDING = "asc",\n' +
    '    DESCENDING = "desc",\n' +
    '    NONE = ""\n' +
    '}'

  exportSortEvent:any = 'export interface SortEvent {\n' +
    '    sortColumn: any;\n' +
    '    sortDirection: \'asc\' | \'desc\' | \'\';\n' +
    '}';


  constructor(private userService: UserService) {
    this.headers = [
      {name: 'ID', value:'id'},
      {name: 'Nome', value: 'name'},
      {name: 'Username', value: 'username'},
      {name: 'Email', value: 'email'}
    ];

    this.extras = [
      {name: 'Azienda', value: 'company'},
      {name: 'Telefono', value: 'phone'},
      {name: 'Indirizzo', value: 'address'}
    ];

    this.deepDisplay = [
      {name: 'Nome', value:'company.name'},
      {name: 'Via', value:'address.street'},
      {name: 'Città', value:'address.city'},
      {name: 'Latitudine', value:'address.geo.lat'},
      {name: 'Longitudine', value:'address.geo.lng'}
    ]

    this.collectionSize = 10;
  }

  ngOnInit(): void {
    this.getData();
  }

  protected readonly Object = Object;
  getDetails($event:any) {
    this.loading = true;
    this.userService.getUserDetails($event).subscribe((response:any)=>{
      this.dataDetails = response;
      this.loading = false;
    })
  }

  sortData($event: SortEvent) {
    this.data = this.userService.sortDataByColumn(this.page,this.pageSize, $event);
  }

  getData(page?: number){
    this.userService.getData(page? page:1,this.pageSize).subscribe((resp: any)=>{
      this.data = resp;
      console.log(resp);
    })
  }

  changePage($event: number) {
    this.page = $event;
    this.getData(this.page);
  }

  selectSize($event: number) {
    this.pageSize = $event;
    this.getData();
  }
}
