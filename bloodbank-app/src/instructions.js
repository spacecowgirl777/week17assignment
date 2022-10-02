/*
hannah's blood bank. What are the components?
3 pages
10 components
must CRUD an API

1. Ordering (from hospital)
    11. blood menu (from inventory)
    12. view orders
        111.edit button
        112.close button
    13. edit module 
        121.update
        122.cancel edit
    14. completion module
        131. complete and archive
        132. complete
        133. cancel completion

2. Inventory and Processing (from API and intake)
    21. inventory farm from API
        211. all products for purchase
            2111. send to processing WIPs list
            2112. destroy
    22. processing (from list of WIPs)
        222. freeze glycerol RBC solution or plasma
            22221. optional : thaw & refreeze plasma to make cryoprecipitate
        221. irradiate (only nonfrozen RBCs & plasma, platelets)

3. Intake and Production (from lab user)
    31. intake form: blood type, component donated
    32. Production to-dos list from intake form 
        321. whole blood needs apheresis 
            3211. push to farm (view in p2.1)
            3212. send to processing
        322. RBCs plasma and platelets
            3221. push to farm (view in p2.1)
            3222. send to processing
*/


//navigator
//collectionspage
//processpage
//farmpage
//modifications
//publisher
//deletor