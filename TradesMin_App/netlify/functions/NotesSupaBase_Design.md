# Notes file for building the SupaBase database "V2"
After making the diagram with primary/foreign keys
    - Go through columns and add GOOD descriptions for each
        - This will come in handy when building the new Front End => data input limitations 
    
### MAD NOTES **
- Selecting data types now will cause issues down the line
    Example: materials.quantity => Text / Numeric
        - Will this be calculated later or just presented as a list? 25 meters of cable + 15 meters of cable
        - Ultimately, a DD menu to select materials is required
            *then, the calculations can be type-calibrated*
