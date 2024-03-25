// Récupérer les éléments HTML dans des variables
const factureForm = document.getElementById("facture-form");
const ciblesInput = document.getElementById("cible");
const periodeInput = document.getElementById("periode");
const messagesDiv = document.getElementById("messages");
const factureList = document.getElementById("facture-list");
const vendeurName = document.getElementById("vendeur-name"); // Ajout de cette ligne
const moment = document.getElementById("moment"); // Ajout de cette ligne
const montantTTCMinInput = document.getElementById("montant-ttc-min");
const montantTTCMaxInput = document.getElementById("montant-ttc-max");
// Récupérez l'élément select du vendeur
const vendeurSelect = document.getElementById("vendeur");

//Fonction d'exportation du fichier Excel
document.getElementById('export-btn').addEventListener('click', function() {
    let table = document.getElementById('facture-list'); // Assurez-vous que c'est l'ID de la section tbody de votre tableau
    let workbook = XLSX.utils.book_new(); // Crée un nouveau classeur
    // Assurez-vous d'englober votre tableau, incluant <thead> pour l'entête
    let ws = XLSX.utils.table_to_sheet(document.querySelector('table'));

    // Définir la largeur d'une colonne
    ws['!cols'] = [{ wpx: 200 }, { wpx: 100 }, { wpx: 100 },];

    // Appliquer un style de police gras à l'entête (ex: première ligne)
    let cellRef = XLSX.utils.encode_cell({c: 0, r: 0}); // Cellule A1
    if(ws[cellRef]) ws[cellRef].s = { font: { bold: true } };

    XLSX.utils.book_append_sheet(workbook, ws, "Factures");// Formattez le nom du fichier avec le nom du vendeur et le mois
    let nomFichier = `Factures_${vendeurSelect}_${periode}.xlsx`;
    
    // Puis lors de l'exportation :
    XLSX.writeFile(workbook, nomFichier);
});


// Listes d'acheteurs et d'articles par défaut
let acheteurs = "";
let NUI = "";
let articles = [];

// Ajoutez un écouteur d'événements pour le changement de sélection
vendeurSelect.addEventListener("change", function () {
    const selectedVendeur = vendeurSelect.value;

    // Mettez à jour les listes d'acheteurs et d'articles en fonction du vendeur sélectionné
    if (selectedVendeur === "SABRY TAHA MAHMOUD") {
        acheteurs = ["SABRY TAHA MAHMOUD"];
        NUI= "P129316450532L";
        articles = [
            { designation: "SERPILERES DOUBLE A", prix: 365 },
            { designation: "HANGER", prix: 543 },
            { designation: "COUCHE GRACIA JUMBO TAILLE S", prix: 5515 },
            { designation: "ESSUIE TOUT MINI SANITEX 1*1", prix: 280 },
            { designation: "CLOTH HANGER APR2304-528", prix: 1186 },
            { designation: "CURTAIN", prix: 5662 },
            { designation: "TAPIS", prix: 1650 }
        ];
    } else if (selectedVendeur === "JIN LIWEI") {
        acheteurs = ["JIN LIWEI"];
        NUI= "P068417360487R";
        articles = [
            { designation: "VARTA LITHIUM COIN CR2032 B1", prix: 393 },
            { designation: "STE SCELA COLORIES", prix: 487 },
            { designation: "NOTEBOOK 40 LEAVES SQ", prix: 350 },
            { designation: "SERVIETTE 33*27 100*36", prix: 158 },
            { designation: "COLG HERB 70G", prix: 644 },
            { designation: "SAFETY BOOTS 194722", prix: 7920 },
            { designation: "TIMOR AIK 300ML", prix: 1768 },
            { designation: "VARTA LONGLIFE AA B2", prix: 549 },
            { designation: "MOUCHOIRS COSMETIQUE ORAN", prix: 345 },
            { designation: "18 STAND FAN BELLE VIE BV-18", prix: 14700 }
        ];
    } else if (selectedVendeur === "LEAFWOO TRADING") {
        acheteurs = ["LEAFWOO TRADING"];
        NUI= "M021912750709G";
        articles = [
            { designation: "CURTAIN", prix: 5662 },
            { designation: "CURTAIN 250*250 F", prix: 7451 },
            { designation: "CURTAIN POLE 1016002", prix: 8509 },
            { designation: "CURTAIN BUCKLE", prix: 539 }
        ];
    }else if (selectedVendeur === "YANG YIJIANG") {
        acheteurs = ["YANG YIJIANG"];
        NUI= "P018817333009X";
        articles = [
            { designation: "CHAUSSURE PETITE", prix: 825 },
            { designation: "CHAUSSURE", prix: 1126 },
            { designation: "BABOUCHE", prix: 742 }
        ];
    }else if (selectedVendeur === "LITERIE ET CONNEX") {
        acheteurs = ["LITERIE ET CONNEX"];
        NUI= "M012014402359N";
        articles = [
            { designation: "SERVIETTE DE TABLE DUPLI 30*10", prix: 225 },
            { designation: "CURTAIN 250*250*H", prix: 3721 },
            { designation: "CURTAIN ROD2M", prix: 4572 },
            { designation: "CURTAIN BUCKLE", prix: 539 }
        ];
    }else if (selectedVendeur === "JIA TINGKAI") {
        acheteurs = ["JIA TINGKAI"];
        NUI= "P107614367479A";
        articles = [
            { designation: "CHAUSSURE PETITE", prix: 825 },
            { designation: "CHAUSSURE", prix: 1126 },
            { designation: "BABOUCHE", prix: 742 }
        ];
    }else if (selectedVendeur === "APOLLO GRAPHICS") {
        acheteurs = ["APOLLO GRAPHICS"];
        NUI= "M122116891192Z";
        articles = [
            { designation: "TARPAUL REPART TAPE", prix: 834 },
            { designation: "WINE GLASS", prix: 879 },
            { designation: "TAPE MEASURE 191396", prix: 831 },
            { designation: "TAPE DISPENSER", prix: 225 },
            { designation: "DUCT TAPE 1030021", prix: 807 },
            { designation: "MEASURING TAPE", prix: 2655 }
        ];
    }else if (selectedVendeur === "AMBASSA YODI") {
        acheteurs = ["AMBASSA YODI"];
        NUI= "P068316945524A";
        articles = [
            { designation: "GRAND SCEAU", prix: 890 },
            { designation: "GLASS CUP 3002038", prix: 1800 },
            { designation: "MOYENNE CHAISE", prix: 2575 },
            { designation: "CUPS 200ML", prix: 820 },
            { designation: "GLACIER", prix: 2520 },
            { designation: "GRANDE ETAGERE", prix: 5166 },
            { designation: "GOBELET BLEU", prix: 856 },
            { designation: "GRANDE GAMELLE", prix: 882 },
            { designation: "GOBELET BLANC", prix: 890 }
        ];
    }else if (selectedVendeur === "CHEN XUEQIN") {
        acheteurs = ["CHEN XUEQIN"];
        NUI= "P078612442961D";
        articles = [
            { designation: "SERVIETTE DE TABLE DUPLI 30*100", prix: 225 },
            { designation: "CLOTH HANGER APR2304-526", prix: 1186 },
            { designation: "SERVIETTE DE BAIN Y9966", prix: 4455 }
        ];
    }else if (selectedVendeur === "RAINBOW CAIXIA") {
        acheteurs = ["RAINBOW CAIXIA"];
        NUI= "M021912750077T";
        articles = [
            { designation: "TANI COUCHE BEBE TAILLE 3", prix: 1710 },
            { designation: "SERVIETTE 33*27 100*36", prix: 158 },
            { designation: "HANGER", prix: 543 },
            { designation: "HAT", prix: 867 }
        ];
    }else if (selectedVendeur === "PEINTURE GLOBALE") {
        acheteurs = ["PEINTURE GLOBALE"];
        NUI= "M012115394707E";
        articles = [
            { designation: "PAINT ROLLER", prix: 1650 },
            { designation: "MOTOR FLUSH", prix: 1360 },
            { designation: "MOTORCYCLE TAIL LIGHT 4008078", prix: 1669 }
        ];
    }else if (selectedVendeur === "ZHANG SEN") {
        acheteurs = ["ZHANG SEN"];
        NUI= "P127214368176Z";
        articles = [
            { designation: "BABOUCHE", prix: 742 },
            { designation: "HANGER", prix: 543 },
            { designation: "HAT", prix: 867 },
            { designation: "RAIN SHOE", prix: 1345 },
            { designation: "CHAUSSURE PETITE", prix: 825 }
        ];
    }else if (selectedVendeur === "YESON SARL") {
        acheteurs = ["YESON SARL"];
        NUI= "M011812676292E";
        articles = [
            { designation: "ELECTRIC KETTLE SCARLETTE STEEL TD002", prix: 3689 },
            { designation: "GAS OVEN BLACK BRNR", prix: 930 },
            { designation: "ELEKETTLE EV-EK108LT", prix: 15325 },
            { designation: "EMERGENCY LAMP", prix: 5610 },
            { designation: "GLASS WATER JUG COVER MAH JUN2306", prix: 1814 },
            { designation: "BELLE VIE 18 STAND FAN BV EL01", prix: 12445 }
        ];
    }else if (selectedVendeur === "ZHAO WUYUN") {
        acheteurs = ["ZHAO WUYUN"];
        NUI= "P027312468959G";
        articles = [
            { designation: "BABOUCHE", prix: 742 },
            { designation: "HANGER", prix: 543 },
            { designation: "CHAUSSURE", prix: 1126 },
            { designation: "HAT", prix: 867 },
            { designation: "RAIN SHOE", prix: 1345 },
            { designation: "CHAUSSURE PETITE", prix: 825 }
        ];
    }else if (selectedVendeur === "ZHANG GUOLI") {
        acheteurs = ["ZHANG GUOLI"];
        NUI= "P08831244296X";
        articles = [
            { designation: "PAS D'ARTICLE", prix: 0 },
        ];
    }else if (selectedVendeur === "Ets ANNENG") {
        acheteurs = ["Ets ANNENG"];
        NUI= "P047312676539A";
        articles = [
            { designation: "PAS D'ARTICLES", prix: 0 },
        ];
    }
});
    
// Écouter la soumission du formulaire et implémenter les fonctions
factureForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Récupérer les valeurs des champs
    const cibles = parseInt(ciblesInput.value);
    const periode = periodeInput.value;
    const vendeur = vendeurSelect.value;
    const montantTTCMin = parseFloat(montantTTCMinInput.value);
    const montantTTCMax = parseFloat(montantTTCMaxInput.value);

    // Valider les entrées utilisateur
    if (isNaN(cibles) || cibles <= 0 || isNaN(montantTTCMin) || isNaN(montantTTCMax) || montantTTCMin > montantTTCMax) {
        showMessage("Veuillez entrer des valeurs valides.");
        return;
    }

    // Extraire le mois et l'année
    const [annee, mois] = periode.split("-");

    // Afficher le nom du vendeur
    vendeurName.textContent = vendeur; // Mettre à jour le texte avec le nom du vendeur

    // Moment de saisie
    moment.textContent = `${mois}/${annee}`;

    // Appeler la fonction de génération de factures
    const factures = generateFactures(cibles, annee, mois, montantTTCMin, montantTTCMax);

    // Après avoir généré les factures, triez-les par date de manière croissante
    factures.sort((a, b) => {
        const dateA = new Date(a.date.split('-').reverse().join('-'));
        const dateB = new Date(b.date.split('-').reverse().join('-'));
        return dateA - dateB;
    });

    // Afficher les factures générées
    displayFactures(factures);

    // Après avoir affiché les factures générées, ajoutez les totaux
    const totals = calculateTotal(factures);

    const totalRow = document.createElement("tr");
    const totalLabelCell = document.createElement("td");
    
    totalLabelCell.textContent = "TOTAL";
    totalLabelCell.colSpan = 6; // Span sur les 6 premières colonnes
    totalRow.appendChild(totalLabelCell);

    const totalMontantTotalCell = document.createElement("td");
    totalMontantTotalCell.textContent = totals.totalMontantTotal;

    totalRow.appendChild(totalMontantTotalCell);

    // Ajouter deux cellules vides
    for (let i = 0; i < 2; i++) {
        const emptyCell = document.createElement("td");
        totalRow.appendChild(emptyCell);
    }

    const totalMontantTTCCell = document.createElement("td");
    totalMontantTTCCell.textContent = totals.totalMontantTTC;
    totalRow.appendChild(totalMontantTTCCell);

    factureList.appendChild(totalRow);
});

// Fonction pour afficher un message d'erreur
function showMessage(message) {
    messagesDiv.textContent = message;
}


//POUR EXCLURE SAMEDI ET DIMANCHE (excludeWeekends = true) 
//POUR  EXCLURE UNIQUEMENT DIMANCHE (excludeWeekends = false)
function generateRandomDate(annee, mois, excludeWeekends = true) {
    let date;
    const maxJour = mois === 2 ? (annee % 4 === 0 && (annee % 100 !== 0 || annee % 400 === 0) ? 29 : 28) : (mois === 4 || mois === 6 || mois === 9 || mois === 11 ? 30 : 31);

    do {
        const jour = Math.floor(randomBetween(1, maxJour + 1));
        date = new Date(annee, mois - 1, jour);

        // Ajout de la condition pour exclure les samedis et/ou dimanches si nécessaire
        if (excludeWeekends) {
            // Exclure à la fois les samedis (6) et les dimanches (0)
            if (date.getDay() === 6 || date.getDay() === 0) {
                date = null;
            }
        } else {
            // Exclure uniquement les dimanches (0), la condition initiale reste valide
            if (date.getDay() === 0) {
                date = null;
            }
        }
    } while (!date); // Répéter tant qu'une date valide n'a pas été trouvée

    return `${('0' + date.getDate()).slice(-2)}-${('0' + (date.getMonth() + 1)).slice(-2)}-${annee}`;
}

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

/* 
// Génère des date aléatoire sur tout les jours de la semaine
function generateRandomDate(annee, mois) {
    let date;
    const maxJour = mois === 2 ? (annee % 4 === 0 && (annee % 100 !== 0 || annee % 400 === 0) ? 29 : 28) : (mois === 4 || mois === 6 || mois === 9 || mois === 11 ? 30 : 31);

    do {
        const jour = Math.floor(randomBetween(1, maxJour + 1));
        date = new Date(annee, mois - 1, jour);

        // Plus besoin de vérifier si le jour est un samedi ou un dimanche, tous les jours sont acceptés
    } while (date.getMonth() !== mois - 1); // Répéter tant qu'une date valide (respectant le bon mois) n'a pas été trouvée

    return `${('0' + date.getDate()).slice(-2)}-${('0' + (date.getMonth() + 1)).slice(-2)}-${annee}`;
}

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

*/

// Fonction pour générer un nombre aléatoire dans une plage donnée
function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

// Fonction pour générer les factures
function generateFactures(cibles, annee, mois, montantTTCMin, montantTTCMax) {
    const factures = [];
    let totalMontantHT = 0; // Variable globale pour suivre le total du Montant HT

    // Boucle pour générer le nombre souhaité de factures
    while (cibles > totalMontantHT) {
        const date = generateRandomDate(annee, mois);
        const acheteur = acheteurs[Math.floor(randomBetween(0, acheteurs.length))];
        const nombreArticles = Math.floor(randomBetween(1, 5));

        let montantTotalFacture = 0;
        const factureArticles = [];

        for (let j = 0; j < nombreArticles; j++) {
            const article = articles[Math.floor(randomBetween(0, articles.length))];
            const prixUnitaire = article.prix;

            const montantTTCRestant = montantTTCMax - montantTotalFacture;
            const quantiteMax = Math.floor(montantTTCRestant / prixUnitaire);
            const quantite = Math.floor(randomBetween(1, quantiteMax + 1));
            const montant = quantite * prixUnitaire;

            factureArticles.push({
                designation: article.designation,
                prix: prixUnitaire,
                quantite: quantite,
                montant: montant
            });

            montantTotalFacture += montant;
        }

        const montantTotal = montantTotalFacture;
        const TVA = 0.1925 * montantTotal;
        const PRE = 0.05 * montantTotal;
        const MONTANT_TTC = montantTotal + TVA + PRE;

        if (MONTANT_TTC >= montantTTCMin && MONTANT_TTC <= montantTTCMax) {
            factures.push({
                date: date,
                acheteur: acheteur,
                articles: factureArticles,
                montantTotal: montantTotal.toFixed(0),
                TVA: TVA.toFixed(2),
                PRE: PRE.toFixed(2),
                MONTANT_TTC: MONTANT_TTC.toFixed(0)
            });

            totalMontantHT += parseFloat(montantTotal.toFixed(0)); // Mise à jour de la variable globale avec le montant HT de la facture actuelle
            console.log(`Total Montant HT mis à jour: ${totalMontantHT}`); // Affichage en temps réel de la mise à jour
        
            // Vérification si totalMontantHT dépasse la cible
            if (totalMontantHT > cibles) {
                console.log("La cible de Montant HT a été dépassée. Arrêt de la génération des factures.");
                break; // Sortie de la boucle si la condition est remplie
            }
        
        } 
        
    }

    return factures;
}

//Fonction d'impression 
function imprimerToutesLesFactures(factures) {
    let contenuGlobal = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
    <meta charset="UTF-8">
    <title>Impression des Factures</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background: white;
            width: 100%;
        }
        .facture-container{
            display: block;
            width: 100%;
            height: calc(50% - 65mm);
            box-sizing: border-box;
            overflow: hidden;            page-break-inside: avoid; /* Empêche les éléments de se diviser sur deux pages */
        }
        .page-break {
            display: none; /* Cachez-le par défaut */
        }
        @media print {
            body {
                background-color: #f2f2f2;
            }
            .page-break {
                display: block;
                page-break-before: always;
            }
        }
        
        .facture-header, .facture-info, .facture-items, .facture-totals {
            width: 100%;
            border-collapse: collapse;
            page-break-after: avoid;
        }
        .facture-header {
            margin-bottom: 20px;
        }
        .logo {
            width: 50px; /* Adjust as needed */
            height: 50px; /* Adjust as needed */
            display: block;
            margin-left: auto;
        }
        .facture-header th, .facture-header td {
            border: none;
            text-align: left;
        }
        .facture-info, .facture-items, .facture-totals {
            border: 1px solid #ddd;
            margin-bottom: 20px;
        }
        .facture-info th, .facture-info td,
        .facture-items th, .facture-items td,
        .facture-totals th, .facture-totals td {
            padding: 8px;
            border: 1px solid #ddd;
        }
        .facture-items th {
            background-color: #f8f8f8;
        }
        .facture-totals th {
            text-align: right;
        }
        .facture-totals td {
            text-align: right;
        }
        .highlight {
            color: orange;
        }
    </style>
    </head>
    <body>
    `;

    factures.forEach((facture, index) => {
        contenuGlobal += `
            <div class="facture-container">
        <table class="facture-header">
            <tr>
                <td><img src="path_to_your_logo.png" alt="Logo" class="logo"/></td>
                <td style="text-align: right;">
                    <strong>NOM ENTREPRISE</strong><br>
                    N° Contribuable
                </td>
            </tr>
        </table>
        <table class="facture-info">
            <tr>
                <th>NOM :</th>
                <td>${facture.acheteur}</td>
            </tr>
            <tr>
                <th>N°Contr. :</th>
                <td>${facture.numeroContrat}</td>
            </tr>
            <tr>
                <th>DATE :</th>
                <td>${facture.date}</td>
            </tr>
        </table>
        <table class="facture-items">
            <thead>
                <tr>
                    <th>QTE</th>
                    <th>DESIGNATION</th>
                    <th>PRIX UNIT. HT</th>
                    <th>MONTANT HT</th>
                </tr>
            </thead>
            <tbody>
                ${facture.articles.map(article => `
                    <tr>
                        <td>${article.quantite}</td>
                        <td>${article.designation}</td>
                        <td>${article.prix.toFixed(2)}</td>
                        <td>${(article.prix * article.quantite).toFixed(2)}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
        <table class="facture-totals">
            <tr>
                <th>TVA 19,25%</th>
                <td>${facture.TVA}</td>
            </tr>
            <tr>
                <th>P/A 5%</th>
                <td>${facture.PRE}</td>
            </tr>
            <tr>
                <th>TOTAL</th>
                <td>${facture.MONTANT_TTC}</td>
            </tr>
        </table>
        </div>
        ${((index + 1) % 2 === 0 && index + 1 !== factures.length) ? '<div class="page-break"></div>' : ''}
    `;
});

contenuGlobal += `</body></html>`;

// Ouvre une nouvelle fenêtre pour l'impression
let fenetreImpression = window.open('', '_blank');
fenetreImpression.document.write(contenuGlobal);
fenetreImpression.document.close();
fenetreImpression.focus();
fenetreImpression.print();
fenetreImpression.close();
}

// Fonction pour afficher les factures générées
function displayFactures(factures) {

        // Vérifier si le bouton d'impression existe déjà
        let boutonImprimerTout = document.getElementById('imprimer-toutes-les-factures');
        if (!boutonImprimerTout) {
            // Création du bouton d'impression s'il n'existe pas
            boutonImprimerTout = document.createElement("button");
            boutonImprimerTout.id = 'imprimer-toutes-les-factures';
            boutonImprimerTout.textContent = "Imprimer Toutes Les Factures";
            // ... Styles du bouton ...
            boutonImprimerTout.class = 'imprim';
            boutonImprimerTout.style.marginTop = '10px';
            boutonImprimerTout.style.marginRight = '5px';
            boutonImprimerTout.style.padding = '5px';
            //boutonImprimerTout.style.marginBottom = '10px';
            boutonImprimerTout.style.marginLeft = '5px';
            boutonImprimerTout.onclick = function() {
                imprimerToutesLesFactures(factures);
            };
        }
    
        // Localiser le bouton 'Exporter vers Excel' dans le DOM
        let exportButton = document.getElementById('export-btn');
        // Insérer le bouton 'Imprimer Toutes Les Factures' avant le bouton 'Exporter vers Excel'
        exportButton.parentNode.insertBefore(boutonImprimerTout, exportButton);
        /*si on veux que le boutton soit apres le btn exporter 
            exportButton.insertAdjacentElement('afterend', boutonImprimerTout);*/

    // Effacer les anciennes factures affichées
    factureList.innerHTML = "";

    // Trier les factures par date de manière croissante
    factures.sort((a, b) => {
        const dateA = new Date(a.date.replace(/(\d{2})-(\d{2})-(\d{4})/, "$3-$2-$1"));
        const dateB = new Date(b.date.replace(/(\d{2})-(\d{2})-(\d{4})/, "$3-$2-$1"));
        return dateA - dateB;
    });

    // Boucle pour afficher les nouvelles factures triées par date
    factures.forEach((facture) => {
        const row = document.createElement("tr");

        // Création des cellules de la ligne
        const dateCell = document.createElement("td");
        dateCell.textContent = facture.date;

        const acheteurCell = document.createElement("td");
        acheteurCell.textContent = facture.acheteur;

        const articlesCell = document.createElement("td");
        const articlesList = document.createElement("ul");

        facture.articles.forEach((article) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${article.designation}`;
            articlesList.appendChild(listItem);
        });
        articlesCell.appendChild(articlesList);

        const prixCell = document.createElement("td");
        const prixList = document.createElement("ul");

        facture.articles.forEach((article) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${article.prix}`;
            prixList.appendChild(listItem);
        });
        prixCell.appendChild(prixList);

        const qteCell = document.createElement("td");
        const qteList = document.createElement("ul");

        facture.articles.forEach((article) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${article.quantite} `;
            qteList.appendChild(listItem);
        });
        qteCell.appendChild(qteList);

        const montantCell = document.createElement("td");
        const montantList = document.createElement("ul");

        facture.articles.forEach((article) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${article.montant}`;
            montantList.appendChild(listItem);
        });
        montantCell.appendChild(montantList);

        const montantTotalCell = document.createElement("td");
        montantTotalCell.textContent = facture.montantTotal;

        const TVACell = document.createElement("td");
        TVACell.textContent = facture.TVA;

        const PRECell = document.createElement("td");
        PRECell.textContent = facture.PRE;

        const MONTANT_TTCCell = document.createElement("td");
        MONTANT_TTCCell.textContent = facture.MONTANT_TTC;

        // Ajout des cellules à la ligne
        row.appendChild(dateCell);
        row.appendChild(acheteurCell);
        row.appendChild(articlesCell);
        row.appendChild(prixCell);
        row.appendChild(qteCell);
        row.appendChild(montantCell);
        row.appendChild(montantTotalCell);
        row.appendChild(TVACell);
        row.appendChild(PRECell);
        row.appendChild(MONTANT_TTCCell);

        // Ajout de la ligne à la liste de factures
        factureList.appendChild(row);
    });

}

// Fonction de calcul des totaux de MONTANT TOTAL et MONTANT TTC
function calculateTotal(factures) {
    let totalMontantTotal = 0;
    let totalMontantTTC = 0;

    factures.forEach((facture) => {
        totalMontantTotal += parseFloat(facture.montantTotal);
        totalMontantTTC += parseFloat(facture.MONTANT_TTC);
    });

    return {
        totalMontantTotal: totalMontantTotal.toFixed(0),
        totalMontantTTC: totalMontantTTC.toFixed(0),
    };
}




