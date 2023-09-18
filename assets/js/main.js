function calculate() {
  //   * input
  let bill = parseFloat(document.getElementById("billInput").value);
  let persons = parseInt(document.getElementById("personsInput").value);
  let serviceValue = parseFloat(document.getElementById("service").value);

  //   * input korrekt?
  let patternBill = document
    .getElementById("billInput")
    .getAttribute("pattern");

  let patternPersons = document
    .getElementById("personsInput")
    .getAttribute("pattern");

  if (
    !isNaN(bill) && // korreter wert eingegeben?
    !isNaN(persons) &&
    !isNaN(serviceValue) &&
    RegExp(patternBill).test(billInput.value) && // pattern korrekt?
    RegExp(patternPersons).test(personsInput.value) &&
    persons > 0
  ) {
    // * Berechnung
    let service = parseFloat(document.getElementById("service").value);
    let tip = bill * service;
    let total = bill + tip;
    let each = total / persons;

    // * Icons
    let tipIcon =
      '<img src="./assets/img/zahlung.png"  alt="trinkgeld icon" style="width: 50px; height: 50px" />';
    let sumIcon =
      '<img src="./assets/img/buchhalter.png"  alt="gesamtpreis icon" style="width: 50px; height: 50px" />';
    let individualPriceIcon =
      '<img src="./assets/img/properson.png"  alt="preis icon" style="width: 50px; height: 50px" />';

    // * Ergebnis
    document.getElementById("resultTip").innerHTML =
      tipIcon + "<p> Trinkgeld: " + tip.toFixed(2) + " €</p>";
    document.getElementById("resultTotal").innerHTML =
      sumIcon + "<p> Gesamtsumme: " + total.toFixed(2) + " €</p>";
    document.getElementById("resultEach").innerHTML =
      individualPriceIcon +
      "<p> Preis pro Person: " +
      each.toFixed(2) +
      " €</p>";
    document.getElementById("invalid").innerHTML = "";
    //
  } else {
    // * Fehlermeldung
    document.getElementById("invalid").innerHTML =
      "Fehler! <br/><br/>Der Rechnungsbetrag kann max. zwei Nachkommastellen haben. <br/>Die Personenzahl muss eine ganze positive Zahl sein. <br/>Es muss eine Serviceoption ausgewählt sein.";
    document.getElementById("resultTip").innerHTML = "";
    document.getElementById("resultTotal").innerHTML = "";
    document.getElementById("resultEach").innerHTML = "";
  }
}

// # style fehlt noch

// welcher operator && oder ||
// button type submit oder nicht

// -- // pattern: ^: Anfang der Zeichenkette.
// -- // \d+: Eine oder mehrere Ziffern vor dem Dezimalpunkt.
// -- // (\.\d{0,2})?: Ein optionaler Bereich, der aus einem Punkt gefolgt von null, einer oder zwei Dezimalstellen besteht.
// -- //  $: Ende der Zeichenkette.
