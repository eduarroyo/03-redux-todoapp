import { createAction, props } from "@ngrx/store";

export const create = createAction(
    '[TODO] Create', 
    props<{text: string}>()
);

export const toggleCompleted = createAction(
    '[TODO] Toggle Completed', 
    props<{id: number}>()
);