import {
  IonButton,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
} from "@ionic/react";
import "./ExploreContainer.css";
import { useState } from "react";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="container">
      <IonDatetimeButton datetime="datetime">
        <div slot="date-target">Bla</div>
      </IonDatetimeButton>

      <IonModal keepContentsMounted={true}>
        <IonDatetime id="datetime"></IonDatetime>
      </IonModal>

      <IonButton onClick={() => setOpen(true)}>Open</IonButton>

      <IonModal
        isOpen={isOpen}
        onDidDismiss={() => setOpen(false)}
        className="ion-datetime-button-overlay"
      >
        <IonDatetime presentation="date"></IonDatetime>
      </IonModal>
    </div>
  );
};

export default ExploreContainer;
