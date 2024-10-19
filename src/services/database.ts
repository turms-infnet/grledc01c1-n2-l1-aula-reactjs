import IDatabaseResponse from "../interfaces/IDatabaseResponse";
import IDatabaseDeleteResponse from "../interfaces/IDatabaseDeleteResponse";

const saveOrUpdate = async (table: string, data: any, supabase: any): Promise<IDatabaseResponse> => {
    return await supabase
        .from(table)
        .upsert(data)
        .select()
}

const remove = async (table: string, id: string, supabase: any): Promise<IDatabaseDeleteResponse> => {
    return await supabase
                .from(table)
                .delete()
                .eq('id', id);
}

const list = async (
  table: string, 
  conditions: { [key: string]: any }, 
  page: number, 
  supabase: any
): Promise<IDatabaseResponse> => {
  if (!page) page = 1;
  const from = (page - 1) * 10;
  const to = from + 10;

  let query = supabase.from(table).select();

  for (const [field, value] of Object.entries(conditions)) {
    query = query.eq(field, value);
  }

  const { data, error } = await query.order('created_at', { ascending: false }).range(from, to);
  return { data, error };
}


export {
    saveOrUpdate,
    remove,
    list
}