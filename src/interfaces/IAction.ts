export default interface ActionInterface {
    typeAction: 1 | 2 | 3;
    id?: string;
    user_id: string;
    action_type: number;
    start_date?: Date;
    end_date?: Date;
    observation?: string;
    type?: number;
    side?: number;
    quantity?: number;
    created_at?: Date;
    status?: boolean;
}