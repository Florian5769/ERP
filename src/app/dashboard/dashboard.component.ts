import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ModalComponent } from "../components/modal/modal.component";
import { DidYouKnewService } from "../api/providers/didYouKnew.service";
import { DidYouKnewModel } from "../api/models/didYouKnew.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  datas: DidYouKnewModel[] = [];

  constructor(
    public matDialog: MatDialog,
    private Dyk: DidYouKnewService
  ) {}

  public showModal: boolean;

  ngOnInit(): void {
    this.getDidYouKnews()
  }

  getDidYouKnew = () => (
    this.Dyk.getDidYouKnew()
      .toPromise()
      .then(result => {

      }
  ))

  getDidYouKnews = () => {
    this.Dyk.getDidYouKnews()
      .toPromise()
      .then((result) => {
        result.length > 0 ? (this.datas = result as DidYouKnewModel[]) : false;
        console.log(result)
      });
  };

  openModal = () => {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.id = "modal-component";
    dialogConfig.data = {
      name: "create-did-you-knew",
      title: "Créer son 'Le saviez-vous ?'",
      description: "Créer un le saviez-vous.",
      actionButtonText: "Delete",
      confirmText: "Confirmer",
      productId: "test",
      template: 3,
      loading: false,
      errors: {
        content: false,
        sport: false,
      },
    };

    let dialog = this.matDialog.open(ModalComponent, dialogConfig);

    dialog.afterClosed().subscribe(() => {
      this.getDidYouKnews()
    })
  };

  hideModal() {
    this.showModal = false;
  }
}
