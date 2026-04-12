create table if not exists waitlist_signups (
  id integer primary key autoincrement,
  submitted_at text not null,
  name text not null,
  email text not null,
  practice_name text not null,
  referral_source text not null,
  referral_source_other text not null default '',
  comments text not null default ''
);

create index if not exists idx_waitlist_signups_submitted_at
  on waitlist_signups (submitted_at desc);

create index if not exists idx_waitlist_signups_email
  on waitlist_signups (email);
