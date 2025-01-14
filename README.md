��#   T D D   a n d   C l e a n   A r c h i t e c t u r e   E x a m p l e   
   
 T h i s   i s   a   s i m p l e   a p p l i c a t i o n   d e m o n s t r a t i n g   t h e   p r i n c i p l e s   o f   T e s t - D r i v e n   D e v e l o p m e n t   ( T D D )   a n d   C l e a n   A r c h i t e c t u r e .   T h e   p r i m a r y   f o c u s   o f   t h i s   p r o j e c t   i s   t o   l e a r n   h o w   t o   s e p a r a t e   c o n c e r n s   a n d   r e f a c t o r   c o d e   w h i l e   a d h e r i n g   t o   S O L I D   p r i n c i p l e s .   
   
   
 # #   I n t r o d u c t i o n   
   
 T h i s   p r o j e c t   s e r v e s   a s   a n   e x a m p l e   o f   a p p l y i n g   T e s t - D r i v e n   D e v e l o p m e n t   ( T D D )   a n d   C l e a n   A r c h i t e c t u r e   p r i n c i p l e s   t o   a   s i m p l e   o p e r a t i o n   ( G E T   a n d   C R E A T E ) .   T h e   p r i m a r y   g o a l   i s   t o   u n d e r s t a n d   h o w   t o   s e p a r a t e   c o n c e r n s   a n d   r e f a c t o r   c o d e   b y   f o l l o w i n g   p r i n c i p l e s   s u c h   a s   S O L I D .   
   
 # #   F e a t u r e s   
   
 -   G E T   o p e r a t i o n   t o   r e t r i e v e   d a t a .   
 -   C R E A T E   o p e r a t i o n   t o   a d d   n e w   d a t a .   
   
 # #   P r o j e c t   S t r u c t u r e   
   
 T h e   p r o j e c t   f o l l o w s   t h e   p r i n c i p l e s   o f   C l e a n   A r c h i t e c t u r e ,   s e p a r a t i n g   c o n c e r n s   i n t o   l a y e r s   ( p r e s e n t a t i o n ,   u s e   c a s e s ,   e n t i t i e s ,   a n d   d a t a   a c c e s s ) .   
   
 # #   T e c h n o l o g i e s   U s e d   
   
 -   E x p r e s s . j s   
 -   S e q u e l i z e   ( o r   y o u r   d a t a b a s e   l i b r a r y   o f   c h o i c e )   
 -   O t h e r   d e p e n d e n c i e s . . .   
   
 # #   G e t t i n g   S t a r t e d   
   
 # # #   P r e r e q u i s i t e s   
   
 B e f o r e   y o u   b e g i n ,   e n s u r e   y o u   h a v e   t h e   f o l l o w i n g   i n s t a l l e d :   
   
 -   N o d e . j s   
 -   n p m   o r   y a r n   
 -   Y o u r   p r e f e r r e d   d a t a b a s e   ( e . g . ,   P o s t g r e S Q L ,   M y S Q L )   
   
 # # #   I n s t a l l a t i o n   
   
 1 .   C l o n e   t h e   r e p o s i t o r y :   
   
       ` ` ` b a s h   
       g i t   c l o n e   h t t p s : / / g i t h u b . c o m / n a d j i b 1 2 3 4 / c v m a k e r . g i t   
 