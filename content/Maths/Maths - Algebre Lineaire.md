---
sticker: emoji//1f9ee
title: Algèbre Linéaire
draft: false
tags:
---
# Fiche : Algèbre linéaire

La branche des mathématiques qui étudie les vecteurs, les espaces vectoriels, les matrices et les transformations linéaires, ainsi que leurs propriétés et applications.

> L’algèbre linéaire, c’est le langage caché derrière la géométrie, la physique et l’intelligence artificielle — une manière d’organiser le monde en vecteurs et transformations.
## Définitions
- **Vecteur** : élément d’un espace vectoriel, souvent représenté par une liste ordonnée de nombres (ex. $\vec{v} = (v_1, v_2, \dots, v_n)$).
- **Matrice** : tableau rectangulaire de nombres organisé en lignes et colonnes, noté $A \in \mathbb{R}^{m \times n}$.
- **Espace vectoriel** : ensemble de vecteurs fermé pour l’addition et la multiplication par un scalaire, respectant les axiomes (associativité, distributivité, etc.).

## Opérations Fondamentales

### Addition de vecteurs
$$
\vec{u} + \vec{v} = (u_1 + v_1, \dots, u_n + v_n)
$$

### Produit scalaire
$$
\vec{u} \cdot \vec{v} = \sum_{i=1}^n u_i v_i
$$
**Exemple** : $\vec{u} = (1,2,3)$, $\vec{v} = (4,5,6)$  
$$
\vec{u} \cdot \vec{v} = 1\cdot4 + 2\cdot5 + 3\cdot6 = 32
$$

Dans un espace vectoriel normé E sur le corps ℝ des nombres réels, le produit scalaire s'exprime
$${\displaystyle {\overrightarrow {u}}\cdot {\overrightarrow {v}}=||{\overrightarrow {u}}||\cdot ||{\overrightarrow {v}}||\cdot \cos({\widehat {{\overrightarrow {u}},{\overrightarrow {v}}}})}$$
Ou $||{\overrightarrow {u}}||$ est la norme du vecteur $\vec {u}$.

**Rappel**
Dans le plan, si le vecteur  $\vec {u}$ a pour coordonnées ${\displaystyle (x,y)}$, sa norme s'écrit
$${\displaystyle \|{\vec {u}}\|={\sqrt {x^{2}+y^{2}}}.}$$  
Si les points $A$ et $B$ ont pour coordonnées respectives $(xA,yA)$ et $(x_{B},y_{B})$ alors :
$${\overrightarrow {AB}}\|={\sqrt {(x_{B}-x_{A})^{2}+(y_{B}-y_{A})^{2}}}$$
### Produit vectoriel (en $\mathbb{R}^3$)
$$
\vec{u} \times \vec{v} =
\begin{pmatrix}
u_2 v_3 - u_3 v_2 \\
u_3 v_1 - u_1 v_3 \\
u_1 v_2 - u_2 v_1
\end{pmatrix}
$$
**Exemple** : $\vec{u} = (1,2,3)$, $\vec{v} = (4,5,6)$  
$$
\vec{u} \times \vec{v} =
\begin{pmatrix}
2\cdot6 - 3\cdot5 \\
3\cdot4 - 1\cdot6 \\
1\cdot5 - 2\cdot4
\end{pmatrix}
=
\begin{pmatrix}
-3 \\ 6 \\ -3
\end{pmatrix}
$$

### Multiplication matricielle
$$
(AB)_{ij} = \sum_{k=1}^n a_{ik} b_{kj}
$$

## Noyau (Kernel) d'une application linéaire
- **Définition** : Le noyau (ou kernel) d'une matrice $A$ est l'ensemble des vecteurs $x$ tels que :
$$
\ker(A) = \{ x \in \mathbb{R}^n \mid A x = 0 \}
$$
- C'est un sous-espace vectoriel de $\mathbb{R}^n$.
- **Lien avec le rang** : $\dim(\ker(A)) + \operatorname{rg}(A) = n$ (théorème du rang).

### Exemple : Calcul du noyau d'une matrice

Soit :
$$
A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}
$$

On cherche :
$$
\ker(A) = \{ x \in \mathbb{R}^2 \mid A x = 0 \}
$$

#### Étape 1 : Écrire le système
$$
\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}
\begin{pmatrix} x_1 \\ x_2 \end{pmatrix} =
\begin{pmatrix} 0 \\ 0 \end{pmatrix}
$$

Ce qui donne :
$$
\begin{cases}
x_1 + 2x_2 = 0 \\
2x_1 + 4x_2 = 0
\end{cases}
$$

#### Étape 2 : Simplifier
La deuxième équation est un multiple de la première, donc il n'y a qu'une seule équation indépendante :
$$
x_1 + 2x_2 = 0 \Rightarrow x_1 = -2x_2
$$

#### Étape 3 : Paramétrisation
On pose $x_2 = t$ (paramètre libre), alors :
$$
x_1 = -2t
$$

Donc :
$$
\ker(A) = \{ (-2t, t) \mid t \in \mathbb{R} \} = \text{Vect}\{ (-2, 1) \}
$$

**Interprétation** : Le noyau est une droite dans $\mathbb{R}^2$ passant par l'origine, dirigée par le vecteur $(-2, 1)$.

---
### Exemple : Calcul du noyau d'une application linéaire

Soit $f : \mathbb{R}^3 \to \mathbb{R}^2$ définie par :
$$
f(x,y,z) = (x + y, y + z)
$$

On cherche :
$$
\ker(f) = \{ (x,y,z) \in \mathbb{R}^3 \mid f(x,y,z) = (0,0) \}
$$

Système :
$$
\begin{cases}
x + y = 0 \\
y + z = 0
\end{cases}
\Rightarrow x = -y, \ z = -y
$$

Donc :
$$
\ker(f) = \{ (-t, t, -t) \mid t \in \mathbb{R} \} = \text{Vect}\{ (-1, 1, -1) \}
$$

**Dimension** : $\dim(\ker(f)) = 1$.

---

### ⚠️ Kernel en CNN ≠ Kernel en algèbre linéaire
- En **algèbre linéaire**, le noyau est un **sous-espace** lié à la solution de $Ax=0$.
- En **traitement d'image / CNN**, un *kernel* est un **filtre** (petite matrice) appliqué par convolution pour extraire des caractéristiques (bords, textures, etc.).
- **Point commun** : les deux impliquent des opérations linéaires, mais le sens est différent :
  - Algèbre : sous-espace de solutions.
  - CNN : opérateur local appliqué sur des données.

## Déterminant

### 1) Déterminant 2×2
$$
\det\begin{pmatrix}
 a & b \\
 c & d
\end{pmatrix}
= ad - bc
$$

**Exemple**
$$
\det\begin{pmatrix}
 2 & 3 \\
 1 & 4
\end{pmatrix}
= 2\times4 - 3\times1 = 5
$$

### 2) Déterminant 3×3 (développement de Laplace)
$$
\det\begin{pmatrix}
 a & b & c \\
 d & e & f \\
 g & h & i
\end{pmatrix}
= a(ei - fh) - b(di - fg) + c(dh - eg)
$$

**Exemple**
$$
\det\begin{pmatrix}
 1 & 2 & 3 \\
 0 & 4 & 5 \\
 1 & 0 & 6
\end{pmatrix}
= 1(4\cdot6 - 5\cdot0) - 2(0\cdot6 - 5\cdot1) + 3(0\cdot0 - 4\cdot1) = 24 + 10 - 12 = 22
$$

## Comatrice et Inverse d'une Matrice
- **Comatrice** : matrice obtenue en remplaçant chaque élément $a_{ij}$ par son cofacteur $C_{ij}$, puis en transposant la matrice des cofacteurs.
- **Formule** :
$$
\text{Com}(A) = \text{adj}(A) = (C_{ij})^T
$$
- **Inverse** :
$$
A^{-1} = \frac{1}{\det(A)} \cdot \text{Com}(A)
$$
**Exemple (2×2)** :
$$
A = \begin{pmatrix} a & b \\ c & d \end{pmatrix},\quad
\text{Com}(A) = \begin{pmatrix} d & -c \\ -b & a \end{pmatrix}
$$

## Inverse d'une matrice
**Condition d'inversibilité** : $A$ est inversible ssi $\det(A) \neq 0$.

**Formule (cofacteurs/adjoint)** :
$$
A^{-1} = \frac{1}{\det(A)}\, \operatorname{com}(A)
$$

**Cas 2×2** :
$$
A = \begin{pmatrix} a & b \\ c & d \end{pmatrix},\quad
A^{-1} = \frac{1}{ad-bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}
$$

En pratique pour inverser une matrice on va plutôt utiliser la méthode de Cramer.

## Diagonalisation
**Définition** : $A$ est diagonalisable s'il existe une matrice inversible $P$ et une matrice diagonale $D$ telles que
$$
P^{-1} A P = D.
$$

**Procédure** :
1. Calculer les valeurs propres : résoudre $\det(A - \lambda I) = 0$.
2. Pour chaque valeur propre $\lambda$, calculer une base du sous-espace propre $\ker(A-\lambda I)$.
3. Si vous obtenez $n$ vecteurs propres **linéairement indépendants**, poser $P=[v_1\ \cdots\ v_n]$ et $D=\operatorname{diag}(\lambda_1,\dots,\lambda_n)$.

**Remarque** : Si le polynôme caractéristique a $n$ racines **simples**, $A$ est diagonalisable. À l'inverse, si la dimension de $\ker(A-\lambda I)$ (multiplicité géométrique) est strictement inférieure à la multiplicité algébrique d'une valeur propre, $A$ **n'est pas** diagonalisable.

$D$ est tel que
$$
D=\begin{pmatrix}
\lambda_1 & 0 & 0 \\
0 & ... & 0 \\
0 & 0 & \lambda_n
\end{pmatrix}
$$
### Exemple de Diagonalisation

Soit :
$$
A = \begin{pmatrix}
4 & 1 \\
0 & 2
\end{pmatrix}
$$

### Étape 1 : Polynôme caractéristique
$$
\det(A - \lambda I) = \det\begin{pmatrix}
4-\lambda & 1 \\
0 & 2-\lambda
\end{pmatrix} = (4-\lambda)(2-\lambda)
$$
Valeurs propres : $\lambda_1 = 4$, $\lambda_2 = 2$.

---

### Étape 2 : Vecteurs propres

#### Pour $\lambda_1 = 4$ :
$$
A - 4I = \begin{pmatrix}
0 & 1 \\
0 & -2
\end{pmatrix}
$$
On résout 
$$(A - 4I)x = 0 \Leftrightarrow \begin{pmatrix}
0 & 1 \\
0 & -2
\end{pmatrix}\begin{pmatrix}
x_1\\
x_2
\end{pmatrix}=0\Leftrightarrow \begin{cases}
0 \cdot x_1 +1\cdot x_2 = 0\\0 \cdot x_1 - 2 \cdot x_2 = 0
\end{cases}
$$

$$
\begin{cases}
x_2 = 0
\end{cases}
\Rightarrow x_1 \text{ libre, on choisit } x_1 = 1
$$
Vecteur propre :
$$
v_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}
$$

#### Pour $\lambda_2 = 2$ :
$$
A - 2I = \begin{pmatrix}
2 & 1 \\
0 & 0
\end{pmatrix}
$$
Système :
$$
2x_1 + x_2 = 0 \Rightarrow x_2 = -2x_1
$$
On choisit $x_1 = 1$ :
$$
v_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}
$$

---

### Étape 3 : Matrices $P$ et $D$
$$
P = \begin{pmatrix}
1 & 1 \\
0 & -2
\end{pmatrix}, \quad
D = \begin{pmatrix}
4 & 0 \\
0 & 2
\end{pmatrix}
$$

Vérification :
$$
P^{-1} A P = D
$$


## Rappels utiles
- $(AB)^T = B^T A^T$ ; $\det(AB)=\det(A)\det(B)$ ; $\operatorname{tr}(AB)=\operatorname{tr}(BA)$.
- Norme euclidienne : $\lVert u \rVert = \sqrt{u\cdot u}$ ; produit scalaire : $u\cdot v = \sum_i u_i v_i$.
- Rang : $\operatorname{rg}(A)$ = dimension de l'espace engendré par les colonnes de $A$ ; $A$ inversible $\Leftrightarrow\ \operatorname{rg}(A)=n$.

---

