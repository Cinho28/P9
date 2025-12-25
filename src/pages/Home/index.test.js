import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";
import * as DataContext from "../../contexts/DataContext";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});

describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    render(<Home />);
    const title = screen.getByRole("heading", { name: "Nos réalisations" });
    expect(title).toBeInTheDocument();
  });
  it("a list a people is displayed", async () => {
    render(<Home />);

    expect(screen.getByText("Samira")).toBeInTheDocument();
    expect(screen.getByText("Jean-baptiste")).toBeInTheDocument();
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Luís")).toBeInTheDocument();
    expect(screen.getByText("Christine")).toBeInTheDocument();
    expect(screen.getByText("Isabelle")).toBeInTheDocument();
  });
  it("a footer is displayed", () => {
    render(<Home />);
    expect(
      screen.getByText("45 avenue de la République, 75000 Paris")
    ).toBeInTheDocument();
    expect(screen.getByText("Contactez-nous")).toBeInTheDocument();
  });
  it("an event card, with the last event, is displayed", async () => {
    const data = {
      events: [
        {
          id: 13,
          type: "conférence",
          date: "2022-08-29T20:28:45.744Z",
          title: "Conférence #productCON",
          cover: "/images/headway-F2KRf_QfCqw-unsplash.png",
          description:
            "Présentation des outils analytics aux professionnels du secteur ",
          nb_guesses: 1300,
          periode: "24-25-26 Février",
          prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié",
          ],
        },
        {
          id: 11,
          type: "conférence",
          date: "2022-01-29T20:28:45.744Z",
          title: "Conférence #productCON",
          cover: "/images/charlesdeluvio-wn7dOzUh3Rs-unsplash.png",
          description:
            "Présentation des outils analytics aux professionnels du secteur ",
          nb_guesses: 1300,
          periode: "24-25-26 Février",
          prestations: [
            "1 espace d’exposition",
            "1 scéne principale",
            "2 espaces de restaurations",
            "1 site web dédié",
          ],
        },
      ],
    };
    jest.spyOn(DataContext, "useData").mockReturnValue({
      data,
      error: null,
      last: data.events[0],
    });
    render(<Home />);
    await screen.findByText("Notre derniére prestation");
    await screen.findAllByText("Conférence #productCON");
  });
});
