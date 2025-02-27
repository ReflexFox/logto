/* init_order = 2 */

create table scopes (
  tenant_id varchar(21) not null
    references tenants (id) on update cascade on delete cascade,
  id varchar(21) not null,
  resource_id varchar(21) not null
    references resources (id) on update cascade on delete cascade,
  name varchar(256) not null,
  description text not null,
  created_at timestamptz not null default(now()),
  primary key (id),
  constraint scopes__resource_id_name
    unique (tenant_id, resource_id, name)
);

create index scopes__id
  on scopes (tenant_id, id);

create trigger set_tenant_id before insert on scopes
  for each row execute procedure set_tenant_id();
