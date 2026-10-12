import { ASSO } from '../config';

/**
 * Sans clé Web3Forms, pas de formulaire : la page Contact quitte le menu et
 * l'adresse de courriel passe au pied de page.
 */
export const formulaireActif = Boolean(import.meta.env.PUBLIC_CLE_FORMULAIRE);

export const lienCourriel = ASSO.courriel ? `mailto:${ASSO.courriel}` : null;
