class PreviewController < ApplicationController
  def index
    activity_id = params[:id]
    path = '/' + (params[:path] || '')
    @activity = Activity.find(activity_id)
    # find page
    @params = {}
    pages = JSON.parse(@activity.pages);
    @page = pages.reverse.detect do |page|
      path_reg = Regexp.new(page['path'].gsub(/\/:(\w+)/, '/(?<\1>\w+)'))

      m = path_reg.match(path)
      if m != nil
        m.names.each do |name| @params[name]=m[name]  end
      end

    end

    @page = @page.to_json
    @params = @params.to_json
  end
end
