import { type NextPage } from "next";
import { Formik, Form } from "formik";
import StepperLayout from "../ui/StepperLayout";
import * as Yup from "yup";
import { useRouter } from "next/router";
import WizardComment from "../ui/WizardComment";
import ZuCommunity from "../ui/ZurCommunity";
import { Button } from "@mantine/core";


const keinereaktion2: NextPage = () => {
  return (
    <StepperLayout>
      <>
        <h1 className="mb-4 text-center">Jugendamt - Anwalt Checkliste</h1>

 
        <div className="grid grid-cols-2 gap-x-5">
                  
          <div>
            <h3>Folgende Dokumente werden für den Termin benötigt:</h3>
            <ul>
              <li>Geburtsurkunde des Kindes</li>
              <li>Titel vom Gericht (vergangene Prozesse?)Nachweis über Unterhaltszahlungen</li>
              <li>Scheidungsurteil bzw. Schreiben des Anwalts/ der Anwältin, sofern vorhanden</li>
              <li>Gehaltsnachweise der letzten 12 Monate</li>
              <li>Unterhaltstitel im Original in der 1. vollstreckbaren Ausfertigung (Beschluss, Urkunde, Vergleich)</li>
              <li>Kopie des Personalausweises/ Passes des Antragstellers</li>
              <li>bei Ausländern: Aufenthaltstitel in Form einer Niederlassungserlaubnis bzw. Aufenthaltserlaubnis</li>
              <li>Aufenthaltsbescheinigungen</li>
              <li>ggbfls. Vaterschaftsanerkennung</li>
            </ul>
          </div>

          <div className="m-auto text-center">
            <h4 >
              Vorlagen, um fehlende Dokumente zu beantragen.
            </h4><Button>Weiter</Button>
          </div>
          

        </div>
        <div className="mt-20 grid grid-cols-2 gap-10">
          {" "}
          <ZuCommunity />
          <WizardComment />
        </div>
      </>
    </StepperLayout>
  );
};

export default keinereaktion2;
