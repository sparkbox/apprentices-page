require 'yaml'
require 'mina/git'

set :env_config, YAML.load_file('./config/env.yml')
set :environment, ENV['on'] || env_config.fetch('default')

set :shared_paths, %w[ .htaccess ]

task :environment do
  env_config.fetch(environment).each do |key, value|
    set key.to_sym, value.to_s
  end
end

task :setup => :environment do
end

desc "Deploys the current version to the server."
task :deploy => :environment do
  deploy do
    invoke 'git:clone'
    invoke 'deploy:link_shared_paths'
    invoke 'deploy:cleanup'
    to :launch do
    end
  end
end

