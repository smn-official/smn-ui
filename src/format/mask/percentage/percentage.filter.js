(function () {
    'use strict';

    angular
        .module('smn-ui')
        .filter('uiPercentage', uiPercentage);

    function uiPercentage() {
        return uiPercentageFilter;

        function uiPercentageFilter(percentage) {
            percentage = percentage.replace('%', '');

            if (!percentage.includes('-') && percentage.match(/^\-?\d+(\,\d+)?\%?$/g) === null)
                percentage = percentage.substr(0, percentage.length - 1)

            if (percentage !== '') percentage += '%';

            if (!percentage || percentage == "%") return '';

            return percentage;
        }
    }
})();